import jwt_decode from 'jwt-decode'

import { createStore } from 'vuex'

import {
    getAllPictures,
    getFilteredPictures
} from '../services/pictures'
import {
    getAllReviews
} from '../services/reviews'

const store = createStore({
    state: {
        logged: false,
        token: '',
        userId: 0,
        username: '',
        role: '',
        pictures: [],
        reviews: []
    },
    mutations: {
        mutationVerificationSession(state) {
            const token = window.localStorage.getItem('token')

            if (token) {
                const { id, username, role } = jwt_decode(token)

                state.token = token
                state.logged = true
                state.userId = id
                state.username = username
                state.role = role
            }
        },
        async mutationLogout(state) {
            window.localStorage.removeItem('token')
            state.logged = false
            state.token = ''
            state.username = ''
            state.role = ''

            const res = await getAllPictures()
            state.pictures = res
        },
        async mutationGetPictures(state) {
            if (state.role === 'User' || state.role === '') {
                const res = await getAllPictures()
                state.pictures = res
            } else if (state.role === 'Painter') {
                const res = await getFilteredPictures(state.userId, state.token)
                state.pictures = res
            }   
        },
        async mutationGetReviews(state) {
            const res = await getAllReviews(state.userId)
            state.reviews = res
        }
    },
    actions: {
        actionVerificationSession(context) {
            context.commit('mutationVerificationSession')
        },
        actionLogout(context) {
            context.commit('mutationLogout')
        },
        actionGetPictures(context) {
            context.commit('mutationGetPictures')
        },
        actionGetReviews(context) {
            context.commit('mutationGetReviews')
        }
    }
})

export default store