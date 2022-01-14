import { pool } from '../database'

export const verifyUsername = async (req, res, next) => {
    const { username } = req.body

    const { rowCount } = await pool.query('SELECT * FROM users WHERE username = $1', [username])

    if (rowCount > 0) return res.status(400).json({ message: 'El username ya se encuentra registrado.' })

    next()
}