import { pool } from '../database'

export const createReview = async (req, res) => {
    const { comment, pictureId, userId } = req.body
    
    const { rows } = await pool.query('INSERT INTO reviews (comment, createdAt, updatedAt, pictureId, userId) VALUES ($1,$2,$3,$4,$5) RETURNING *', [comment, new Date(), new Date(), pictureId, userId])

    res.status(201).json(rows[0])
}

export const getAllReviews = async (req, res) => {
    const { rows } = await pool.query('SELECT R.id, R.updatedAt, R.comment, P.title FROM reviews AS R JOIN pictures AS P ON P.id = R.pictureId WHERE R.userId = $1', [req.params.id])

    res.json(rows)
}

export const deleteReview = async (req, res) => {
    const { rows, rowCount } = await pool.query('DELETE FROM reviews WHERE id = $1 RETURNING *', [req.params.id])

    if (rowCount === 0) return res.status(404).json({ message: 'No se encontró la review.' })

    res.json(rows[0])
}