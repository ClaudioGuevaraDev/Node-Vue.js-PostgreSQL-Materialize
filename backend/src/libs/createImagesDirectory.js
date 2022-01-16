import fs from 'fs'
import path from 'path'

export const createPublicDirectory = () => {
    const directory = path.join(__dirname, '../public')

    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true })
    }
}

export const createImagesDirectory = () => {
    const directory = path.join(__dirname, '../public', 'images')

    fs.mkdirSync(directory, { recursive: true })
}