import axios from 'axios'

const baseURL = '/api/reviews'

export const createReview = async (review, token) => {
    const { data } = await axios.post(baseURL, review, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return data
}

export const getAllReviews = async (userId, token) => {
    const { data } = await axios.get(`${baseURL}/all/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return data
}

export const getOneReview = async (reviewId, token) => {
    const { data } = await axios.get(`${baseURL}/${reviewId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return data
}

export const deleteReview = async (reviewId, token) => {
    const { data } = await axios.delete(`${baseURL}/${reviewId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return data
}

export const updateReview = async (reviewId, review, token) => {
    const { data } = await axios.put(`${baseURL}/${reviewId}`, review, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return data
}