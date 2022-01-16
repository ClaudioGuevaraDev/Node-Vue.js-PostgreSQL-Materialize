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

export const getAllPictures = async (req, res) => {
    const { rows } = await pool.query('SELECT P.id, P.title, P.description, P.image, U.username FROM pictures as P JOIN users as U ON U.id = P.userId')

    res.json(rows)
}

export const getFilteredPictures = async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM pictures WHERE userId = $1', [req.params.id])

    res.json(rows)
}

export const deletePicture = async (req, res) => {
    const { rows, rowCount } = await pool.query('DELETE FROM pictures WHERE id = $1 RETURNING *', [req.params.id])

    if (rowCount === 0) return res.status(404).json({ message: 'No se encontró la pintura.' })

    res.json(rows[0])
}