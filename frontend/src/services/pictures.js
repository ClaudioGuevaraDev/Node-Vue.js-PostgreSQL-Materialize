import axios from 'axios'

const baseURL = '/api/pictures'

export const createPicture = async (picture) => {
    const { data } = await axios.post(baseURL, picture)

    return data
}

export const uploadImage = async (formData, pictureId) => {
    const { data } = await axios.post(`${baseURL}/upload-image/${pictureId}`, formData)

    return data
}

export const deletePicture = async (pictureId) => {
    const { data } = await axios.delete(`${baseURL}/${pictureId}`)

    return data
}

export const getAllPictures = async () => {
    const { data } = await axios.get(baseURL)

    return data
}

export const getOnePicture = async (pictureId) => {
    const { data } = await axios.get(`${baseURL}/${pictureId}`)

    return data
}