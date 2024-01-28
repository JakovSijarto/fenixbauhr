import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home.vue'
import Galerija from '../components/galerija.vue'
import Kontakt from '../components/Kontakt.vue'

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
    path: '/Kontakt',
    name: 'Kontakt',
    component: Kontakt
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router