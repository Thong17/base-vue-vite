import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { OVERVIEW_ROUTE } from '@/modules/overview/routers'
import { INVOICE_ROUTE } from '@/modules/invoice/routers'
import { authGuard } from '@/middlewares/app/authGuard'
import { hasAuth } from '@/middlewares/app/hasAuth'
import { USER_ROUTE } from '@/modules/admin/user/routers'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/auth',
    redirect: 'auth/login',
    beforeEnter: hasAuth,
    component: () => import('@/layouts/AuthLayout.vue'),
    children: [
      {
        name: 'Login',
        meta: { title: 'auth.sign_in' },
        path: '/auth/login',
        component: () => import('@/views/auth/FullLogin.vue'),
      },
    ],
  },
  {
    path: '/admin',
    beforeEnter: authGuard,
    component: () => import('@/layouts/AdminLayout.vue'),
    children: [...USER_ROUTE.ROUTES],
  },
  {
    path: '/',
    redirect: '/overview',
    beforeEnter: authGuard,
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      ...OVERVIEW_ROUTE.ROUTES,
      ...INVOICE_ROUTE.ROUTES,
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFound.vue'),
      },
      {
        path: '/no-permission',
        name: 'NoPermission',
        component: () => import('@/views/NoPermission.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router
