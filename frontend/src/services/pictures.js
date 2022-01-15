import axios from 'axios'

const baseURL = 'http://localhost:4000/api/pictures'

export const createPicture = async (picture) => {
    const { data } = await axios.post(baseURL, picture)

    return data
}

export const uploadImage = async (formData, pictureId) => {
    const { data } = await axios.post(`${baseURL}/upload-image/${pictureId}`, formData)

    return data
}