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
    const { username, email, password } = req.body

    if (!password) return res.status(400).json({ message: 'Falta la contraseña.' })

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

    await sendEmail(rows[0].email)

    res.status(201).json(token)
}

export const signIn = async (req, res) => {
    res.send('sign in')
}