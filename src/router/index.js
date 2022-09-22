import { createRouter,createWebHashHistory } from 'vue-router';
const routes = [
    {
      path: '/indexA',
      component: () => import('../components/indexA.vue'),
      meta:{
          title:'首页'
      }
    },
    {
      path: '/aboutA',
      component: () => import('../components/aboutA.vue'),
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