export const errorHandler = (error, req, res, next) => {
    const { name, message, code } = error

    if (name === 'SyntaxError') {
        return res.status(400).json({ message: 'Formato del JSON incorrecto.' })
    } if (name === 'JsonWebTokenError') {
        return res.status(400).json({ message: 'Formato del token incorecto.' })
    } else if (code === '23505') {
        return res.status(400).json({ message: 'El elemento ya existe.' })
    } else if (code === '23502')    {
        return res.status(400).json({ message: 'Faltan campos.' })
    } else {
        console.log(name)
        console.log(message)
        console.log(code)

        return res.status(500).json({ message: 'Error del servidor.' })
    }
}