import fs from 'fs'
import path from 'path'

export const createImagesDirectory = () => {
    const directory = path.join(__dirname, '../images')

    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true })
    }
}