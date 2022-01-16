import { pool } from "../database"

export const isUser = async (req, res, next) => {
    const { rowCount } = await pool.query('SELECT * FROM roles WHERE name = $1', [req.role])

    if (rowCount === 0) return res.status(401).json({ message: 'No autorizado.' })

    if (req.role !== 'User') return res.status(401).json({ message: 'No autorizado.' })

    next()
}

export const isPainter = async (req, res, next) => {
    const { rowCount } = await pool.query('SELECT * FROM roles WHERE name = $1', [req.role])

    if (rowCount === 0) return res.status(401).json({ message: 'No autorizado.' })

    if (req.role !== 'Painter') return res.status(401).json({ message: 'No autorizado.' })

    next()
}