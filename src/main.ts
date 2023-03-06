import '../src/styles/style.scss'
import '../src/styles/fonts.scss'
import { createApp } from 'vue'
import { Quasar } from 'quasar'
import router from './router/router'
import App from './App.vue'
import 'quasar/dist/quasar.css'
import dotenv from 'dotenv'

dotenv.config()
createApp(App)
    .use(router)
    .use(Quasar, {plugins: {}})
    .mount('#app')
