import jwt from 'jsonwebtoken'

import config from '../config'

import { pool } from '../database'
import {
    encryptPassword,
} from '../libs/handlePassword'
import {
    sendEmail
} from '../libs/sendEmail'

export const signUp = async (req, res) => {
    const { username, email, password, repetedPassword } = req.body

    if (!password || !repetedPassword) return res.status(400).json({ message: 'Falta la contraseña.' })

    if (password !== repetedPassword) return res.status(400).json({ message: 'Las contraseñas no son iguales.' })

    if (password.length < 8) return res.status(400).json({ message: 'La contraseña debe tener un largo mínimo de 8 caracteres.' })

    const roleFound = await pool.query('SELECT * FROM roles WHERE name = $1', ['User'])

    const { rows } = await pool.query('INSERT INTO users (username, email, password, roleId) VALUES ($1, $2, $3, $4) RETURNING *', [username, email, await encryptPassword(password), roleFound.rows[0].id])

    const userToken = {
        id: rows[0].id,
        username: rows[0].username,
        email: rows[0].email
    }

    const token = jwt.sign(userToken, config.TOKEN_SECRET, {
        expiresIn: 86400 // 24 horas
    })

    await sendEmail(rows[0].email, rows[0].id, token)

    res.status(201).json({ message: 'Cuenta registrada. Te enviamos un correo para que verifiques tu cuenta.' })
}

export const confirmAccount = async (req, res) => {
    const userId = req.params.id
    const token = req.params.token

    jwt.verify(token, config.TOKEN_SECRET)

    const { rowCount } = await pool.query('SELECT * FROM users WHERE id = $1', [userId])

    if (rowCount === 0) return res.status(404).json({ message: 'Usuario no encontrado.' })

    await pool.query('UPDATE users SET verified = $1 WHERE id = $2', [true, userId])

    res.send('<p>Cuenta confirmada. Ya puedes iniciar sesión.</p>')
}

export const signIn = async (req, res) => {


    res.send('vas bien')
}