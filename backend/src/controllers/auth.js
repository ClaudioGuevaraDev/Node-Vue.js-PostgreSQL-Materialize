import { pool } from '../database'

export const signUp = async (req, res) => {
    const { password } = req.body

    if (!password) return res.status(400).json({ message: 'Falta la contraseña.' })

    

    res.send('vas bien')
}

export const signIn = async (req, res) => {
    res.send('sign in')
}