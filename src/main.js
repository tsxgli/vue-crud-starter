import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'

import cartstore  from './stores/cartstore'

import './assets/main.css'


const app = createApp(App)

app.use(createPinia())
app.use(cartstore)
app.use(router)

app.mount('#app')
