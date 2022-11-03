import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/style/tailwind.css'

import { Button, NavBar } from 'vant'

const app = createApp(App)

app.use(Button)
app.use(NavBar)

app.mount('#app')
