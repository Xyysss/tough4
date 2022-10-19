import { VueElement } from 'vue';
import { createRouter,createWebHashHistory } from 'vue-router';
const routes = [
    {
      path: '/',
      component: () => import('../components/index.vue'),
      meta:{
          title:'首页'
      }
    },
    {
      path: '/about',
      component: () => import('../components/AppAbout.vue'),
      meta:{
        title:'关于我们'
    }
    },
  ];
  
const router = createRouter({
    history: createWebHashHistory(),  
    routes
  });
  
  export default router;