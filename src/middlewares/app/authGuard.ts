import { useAuthStore } from '@/stores/auth'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export function authGuard(to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) {
  const auth = useAuthStore()
  if (auth.isAuthenticated) {
    next()
  } else {
    next({ name: 'Login', query: { redirect: to.fullPath } })
  }
}
