import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'
import 'vue-toast-notification/dist/theme-sugar.css'

import VueToast from 'vue-toast-notification'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

createApp(App)
    .use(store)
    .use(router)
    .use(VueToast)
    .mount('#app')
