import { pool } from "../database"

export const getAllUsers = async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM users')

    res.json(rows)
}