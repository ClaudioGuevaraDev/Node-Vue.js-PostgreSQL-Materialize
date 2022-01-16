import jwt_decode from 'jwt-decode'

import { createStore } from 'vuex'

import {
    getAllPictures,
    deletePicture
} from '../services/pictures'

const store = createStore({
    state: {
        logged: false,
        token: '',
        userId: 0,
        username: '',
        role: '',
        pictures: []
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
        mutationLogout(state) {
            window.localStorage.removeItem('token')
            state.logged = false
            state.token = ''
            state.username = ''
            state.role = ''
        },
        async mutationGetPictures(state) {
            if (state.role === 'User') {
                const res = await getAllPictures()
                state.pictures = res
            }
        },
        async mutationDeletePicture(state, pictureId) {
            const res = await deletePicture(pictureId)
            state.pictures = state.pictures.filter(picture => picture.id !== res.id)
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
        actionDeletePicture(context, pictureId) {
            context.commit('mutationDeletePicture', pictureId)
        }
    }
})

export default store