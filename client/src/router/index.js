import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/job',
    name: 'Job',
    component: () => import('../views/Job')
  },
  {
    path: '/company',
    name: 'Company',
    component: () => import('../views/Company')
  },
  {
    path: '/find',
    name: 'Find',
    component: () => import('../views/Find')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('../views/Message')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
