import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
