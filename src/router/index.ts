import { createRouter, createWebHistory } from 'vue-router'
import TradeList from '@/components/TradeList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TradeList,
    },
  ],
})

export default router
