import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home.vue'
import Galerija from '../components/galerija.vue'
import Projekti from '../components/projekti.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Galerija',
    name: 'Galerija',
    component: Galerija
  },
  {
    path: '/Projekti',
    name: 'Projekti',
    component: Projekti
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router