import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Layui from '@layui/layui-vue'
// import '@layui/layui-vue/lib/index.css'

const app = createApp(App)

app.use(ElementPlus).use(Layui).use(router)
app.mount('#app')

