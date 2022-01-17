import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/Register.vue')
    },
    {
        path: '/add-picture',
        name: 'add-picture',
        component: () => import('../views/PictureForm.vue')
    },
    {
        path: '/update-picture/:id',
        name: 'update-picture',
        component: () => import('../views/PictureDetailForm.vue')
    },
    {
        path: '/reviews',
        name: 'reviews',
        component: () => import('../views/ReviewList.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router