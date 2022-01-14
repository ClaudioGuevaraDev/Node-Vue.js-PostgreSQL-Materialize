import { pool } from '../database'

export const createRole = async (req, res, next) => {
    const { name } = req.body

    try {
        const { rows } = await pool.query('INSERT INTO roles (name) VALUES ($1) RETURNING *', [name])

        res.status(201).json(rows)
    } catch (error) {
        next(error)
    }
}

export const getAllRoles = async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM roles')

    res.json(rows)
}