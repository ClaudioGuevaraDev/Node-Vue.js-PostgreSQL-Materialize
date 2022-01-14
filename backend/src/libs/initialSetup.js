import { pool } from '../database'

export const createRoles = async () => {
    const { rowCount } = await pool.query('SELECT * FROM roles')

    if (rowCount > 0) return

    await pool.query('INSERT INTO roles (name) VALUES ($1)', ['User'])
    await pool.query('INSERT INTO roles (name) VALUES ($1)', ['Painter'])
}