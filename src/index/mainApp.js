import { createApp } from 'vue'
import NavLeft from './components/NavLeft.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(NavLeft);
app.use(ElementPlus);
app.mount('#logDiv');


export function renderNavRight(body) {

    app.mount(body);
}

