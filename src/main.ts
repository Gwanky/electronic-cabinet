import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'

import App from './App.vue'

import './style.css'
import './assets/style/tailwind.css'

import { Button, NavBar } from 'vant'
import 'vant/lib/index.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Button)
app.use(NavBar)

app.mount('#app')
