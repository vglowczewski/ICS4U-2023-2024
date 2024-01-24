import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/destination/:id/:slug',
      name: 'destination.show',
      component: ()=> import('@/views/DestinationShow.vue'),
      props: route=>({id: parseInt(route.params.id)}),
    }
  ]
})

export default router
