import "./scss/style.css"
import "./assets/fonts/fonts.css"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
const app = createApp(App)

app.use(createPinia())
app.mount('#app')
