import { createRouter, createWebHistory } from 'vue-router'
import Principal from '../Principal.vue'

const routes = [
  {
    path: '/',name: 'Principal', component: Principal
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
