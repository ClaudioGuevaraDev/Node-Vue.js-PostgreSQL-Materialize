import { pool } from '../database'

import { encryptPassword } from '../libs/handlePassword'

export const createRoles = async () => {
    const { rowCount } = await pool.query('SELECT * FROM roles')

    if (rowCount > 0) return

    await pool.query('INSERT INTO roles (name) VALUES ($1)', ['User'])
    await pool.query('INSERT INTO roles (name) VALUES ($1)', ['Painter'])
}

export const createPainterUsers = async () => {
    const { rows } = await pool.query('SELECT * FROM roles WHERE name = $1', ['Painter'])

    const { rowCount } = await pool.query('SELECT * FROM users WHERE roleId = $1', [rows[0].id])

    if (rowCount > 0) return

    await pool.query('INSERT INTO users (username, email, password, verified, roleId) VALUES ($1, $2, $3, $4, $5)', ['pintor03', 'pintor03@gmail.com', await encryptPassword('123'), true, rows[0].id])
}