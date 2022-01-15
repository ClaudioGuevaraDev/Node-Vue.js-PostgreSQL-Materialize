import axios from 'axios'

const baseURL = 'http://localhost:4000/api/auth'

export const signUp = async (user) => {
    const res = await axios.post(`${baseURL}/sign-up`, user)

    return res.data.message
}