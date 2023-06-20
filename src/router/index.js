import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Proyectos from '../views/Proyectos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:HomeView
    },
    {
      path: '/proyectos',
      name: 'Proyectos',
      component: Proyectos
    },
    {
      path: '/contat',
      name: 'Contat',
      component: () => import('../views/ContatView.vue')
    }
  ]
})

export default router
