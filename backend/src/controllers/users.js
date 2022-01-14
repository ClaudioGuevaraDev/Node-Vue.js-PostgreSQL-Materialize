import { pool } from "../database"

export const getAllUsers = async (req, res) => {
    const { rows } = await pool.query('SELECT U.id, U.username, U.email, U.password, U.verified, R.name as role FROM users as U JOIN roles as R ON R.id = U.roleId')

    res.json(rows)
}