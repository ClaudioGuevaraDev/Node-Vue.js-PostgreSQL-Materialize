import { pool } from '../database'

export const createReview = async (req, res) => {
    const { comment, pictureId, userId } = req.body

    const { rows } = await pool.query('INSERT INTO reviews (comment, createdAt, updatedAt, pictureId, userId) VALUES ($1,$2,$3,$4,$5) RETURNING *', [comment, new Date(), new Date(), pictureId, userId])

    res.status(201).json(rows[0])
}

export const getAllReviews = async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM reviews WHERE userdId = $1', [req.params.id])

    res.json(rows)
}