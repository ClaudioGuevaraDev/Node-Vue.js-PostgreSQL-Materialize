import axios from 'axios'

const baseURL = '/api/pictures'

export const createPicture = async (picture, token) => {
    const { data } = await axios.post(baseURL, picture, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return data
}

export const uploadImage = async (formData, pictureId, token) => {
    const { data } = await axios.post(`${baseURL}/upload-image/${pictureId}`, formData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return data
}

export const deletePicture = async (pictureId, token) => {
    const { data } = await axios.delete(`${baseURL}/${pictureId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return data
}

export const getAllPictures = async () => {
    const { data } = await axios.get(baseURL)

    return data
}

export const getOnePicture = async (pictureId, token) => {
    const { data } = await axios.get(`${baseURL}/${pictureId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return data
}

export const getFilteredPictures = async (userId, token) => {
    const { data } = await axios.get(`${baseURL}/filtered/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return data
}

export const updatePicture = async (pictureId, picture, token) => {
    const { data } = await axios.put(`${baseURL}/${pictureId}`, picture, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return data
}

export const updatePictureImage = async (pictureId, formData, token) => {
    const { data } = await axios.put(`${baseURL}/update-image/${pictureId}`, formData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return data
}