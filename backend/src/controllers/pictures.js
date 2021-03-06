import path from 'path'
import fs from 'fs'

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

export const getOnePictures = async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM pictures WHERE id = $1', [req.params.id])

    res.json(rows[0])
}

export const getFilteredPictures = async (req, res) => {
    const { rows } = await pool.query('SELECT P.id, P.title, P.description, P.image, U.username FROM pictures AS P JOIN users AS U ON U.id = P.userId WHERE P.userId = $1', [req.params.id])

    res.json(rows)
}

export const deletePicture = async (req, res) => {
    const { rows, rowCount } = await pool.query('DELETE FROM pictures WHERE id = $1 RETURNING *', [req.params.id])

    const imageUrl = path.join(__dirname, `../public/images/${rows[0].image}`)
    
    fs.unlinkSync(imageUrl)

    if (rowCount === 0) return res.status(404).json({ message: 'No se encontrĂ³ la pintura.' })

    res.json(rows[0])
}

export const updatePicture = async (req, res) => {
    const { title, description } = req.body

    const { rows, rowCount } = await pool.query('UPDATE pictures SET title = $1, description = $2 WHERE id = $3 RETURNING *', [title, description, req.params.id])

    if (rowCount === 0) return res.status(404).json({ message: 'No se encontrĂ³ la pintura.' })

    res.json(rows[0])
}

export const updatePictureImage = async (req, res) => {
    const pictureFound = await pool.query('SELECT * FROM pictures WHERE id = $1', [req.params.id])

    const imageUrl = path.join(__dirname, `../public/images/${pictureFound.rows[0].image}`)

    fs.unlinkSync(imageUrl)

    const { rows } = await pool.query('UPDATE pictures SET image = $1 WHERE id = $2 RETURNING * ', [req.file.filename, req.params.id])

    res.json(rows[0])
}