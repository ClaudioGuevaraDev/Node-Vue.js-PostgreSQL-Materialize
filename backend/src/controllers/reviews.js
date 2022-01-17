import { pool } from '../database'

export const createReview = async (req, res) => {
    const { comment, pictureId, userId } = req.body
    
    const { rows } = await pool.query('INSERT INTO reviews (comment, createdAt, updatedAt, pictureId, userId) VALUES ($1,$2,$3,$4,$5) RETURNING *', [comment, date, date, pictureId, userId])

    res.status(201).json(rows[0])
}

export const getAllReviews = async (req, res) => {
    const { rows } = await pool.query('SELECT R.id, R.updatedAt, R.comment, P.title FROM reviews AS R JOIN pictures AS P ON P.id = R.pictureId WHERE R.userId = $1', [req.params.id])

    console.log(rows)

    res.json(rows)
}