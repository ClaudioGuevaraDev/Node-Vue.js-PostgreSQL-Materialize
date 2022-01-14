import validator from 'validator'

import { pool } from '../database'

export const verifyEmail = async (req, res, next) => {
    const { email } = req.body

    if (!email) return res.status(400).json({ message: 'Falta el correo electrónico.' })

    if (validator.isEmail(email) === false) return res.status(400).json({ message: 'Formato del correo electrónico incorrecto.' })

    const { rowCount } = await pool.query('SELECT * FROM users WHERE email = $1', [email])

    if (rowCount > 0) return res.status(400).json({ message: 'El correo electrónico ya se encuentra registrado.' })

    next()
}