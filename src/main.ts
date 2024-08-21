import { createApp } from 'vue'
import AScene from '@anov/3d-vue'
import App from './App.vue'
import './style.css'

const app = createApp(App)

app.use(AScene).mount('#app')
