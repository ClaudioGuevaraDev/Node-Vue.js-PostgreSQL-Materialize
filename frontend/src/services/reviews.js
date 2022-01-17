import axios from 'axios'

const baseURL = '/api/reviews'

export const createReview = async (review) => {
    const { data } = await axios.post(baseURL, review)

    return data
}

export const getAllReviews = async (userId) => {
    const { data } = await axios.get(`${baseURL}/all/${userId}`)

    return data
}

export const getOneReview = async (reviewId) => {
    const { data } = await axios.get(`${baseURL}/${reviewId}`)

    return data
}

export const deleteReview = async (reviewId) => {
    const { data } = await axios.delete(`${baseURL}/${reviewId}`)

    return data
}

export const updateReview = async (reviewId, review) => {
    const { data } = await axios.put(`${baseURL}/${reviewId}`, review)

    return data
}