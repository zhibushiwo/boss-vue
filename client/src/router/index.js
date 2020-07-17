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
    component: () => import('../views/Job'),
    meta: {
      showFoot: true
    }
  },
  {
    path: '/company',
    name: 'Company',
    component: () => import('../views/Company'),
    meta: {
      showFoot: true
    }
  },
  {
    path: '/find',
    name: 'Find',
    component: () => import('../views/Find'),
    meta: {
      showFoot: true
    }
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('../views/Message'),
    meta: {
      showFoot: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile'),
    meta: {
      showFoot: true
    }
  },
  {
    path: '/*',
    name: '404',
    component: () => import('../views/404'),
    meta: {
      showFoot: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
  }
})

export default router
