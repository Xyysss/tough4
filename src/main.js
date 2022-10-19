import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from 'vue'
import router from './router/index'                                                                                                                 
import "lib-flexible/flexible.js"


createApp(App).use(router).use(VueRouter).mount('#app')
router.beforeEach((to, from, next) => {
    if(to.meta.title){
    document.title = to.meta.title
}
next()
})
