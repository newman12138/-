import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // 引入你的路由配置文件
import pinia from "./store/index";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'


const app = createApp(App)

app.use(router,pinia).mount('#app');

app.use(ElementPlus as any,{locale:zhCn});
// 注册elementplus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue as Record<string, any>)) {
    app.component(key, component)
}

// createApp(App).mount('#app')
