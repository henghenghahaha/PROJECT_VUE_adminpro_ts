import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {path: '/',component: () => import('../components/LoginPage.vue')  },
  {path: '/addInfo',component: () => import('../components/addInfo.vue')  },
  {path: '/alterInfo',component: () => import('../components/alterInfo.vue')  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
