import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PingPong from '@/components/Ping.vue'
import HeatView from '@/views/HeatWave.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/ping',
    name: 'PingPong',
    component: PingPong
  },
  {
    path: '/HW',
    name: 'Heatview',
    component: HeatView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
