export const unknownEndpoint = (req, res, next) => {
    return res.status(404).json({ message: 'Unknown Endpoint.' })

    next()
}