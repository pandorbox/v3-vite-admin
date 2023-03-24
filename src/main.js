import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import { createPinia } from 'pinia'
import globalProperties from "./utils/globalProperties"
import 'vant/lib/index.css'
import globalComponents from "./utils/globalComponents"
import globalShowBlock from "./utils/globalShowBlock"
import 'amfe-flexible'

//element-plus
import "element-plus/dist/index.css"



const app = createApp(App)
app.use(createPinia())
app.use(router)

globalProperties(app)//挂载全局原型
globalComponents(app)//挂载全局组件
globalShowBlock(app) //挂载全局弹出提示

app.mount('#app')
