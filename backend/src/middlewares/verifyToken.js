import jwt from 'jsonwebtoken'

import config from '../config'

const getTokenFrom = (req) => {
    const authorization = req.get('authorization')

    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        return authorization.substring(7)
    }
    return
}

export const verifyToken = (req, res, next) => {
    const token = getTokenFrom(req)

    if (!token) return res.status(401).json({ message: 'No autorizado.' })

    jwt.verify(token, config.TOKEN_SECRET)

    const { role } = jwt.decode(token, config.SECRET)

    req.role = role

    next()
}

