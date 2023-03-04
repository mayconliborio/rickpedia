import '../src/styles/style.scss'
import { createApp } from 'vue'
import { Quasar } from 'quasar'
import router from './router/router'
import App from './App.vue'

createApp(App)
    .use(router)
    .use(Quasar, {plugins: {}})
    .mount('#app')
