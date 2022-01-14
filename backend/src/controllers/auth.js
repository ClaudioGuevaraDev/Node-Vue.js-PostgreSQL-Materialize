import { pool } from '../database'

export const signUp = async (req, res) => {
    const { password } = req.body

    res.send('vas bien')
}

export const signIn = async (req, res) => {
    res.send('sign in')
}