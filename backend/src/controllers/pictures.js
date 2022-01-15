import { pool } from '../database'

export const createPicture = async (req, res) => {
    const { title, description, userId } = req.body

    const { rows } = await pool.query('INSERT INTO pictures (title, description, userId) VALUES ($1, $2, $3) RETURNING *', [title, description, userId])

    res.status(201).json(rows[0])
}

export const uploadImage = async (req, res) => {
    const { rows } = await pool.query('UPDATE pictures SET image = $1 WHERE id = $2 RETURNING *', [req.file.filename, req.params.id])

    res.json(rows[0])
}