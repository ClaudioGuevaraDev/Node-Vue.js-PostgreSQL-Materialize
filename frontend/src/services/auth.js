import axios from 'axios'

const baseURL = '/api/auth'

export const signUp = async (user) => {
    const res = await axios.post(`${baseURL}/sign-up`, user)

    return res.data.message
}

export const signIn = async (user) => {
    const { data } = await axios.post(`${baseURL}/sign-in`, user)

    return data
}