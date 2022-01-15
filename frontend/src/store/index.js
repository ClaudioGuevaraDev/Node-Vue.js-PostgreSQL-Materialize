import jwt_decode from 'jwt-decode'

import { createStore } from 'vuex'

const store = createStore({
    state: {
        logged: false,
        token: '',
        userId: 0,
        username: '',
        role: ''
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
        } 
    },
    actions: {
        actionVerificationSession(context) {
            context.commit('mutationVerificationSession')
        },
        actionLogout(context) {
            context.commit('mutationLogout')
        }
    }
})

export default store