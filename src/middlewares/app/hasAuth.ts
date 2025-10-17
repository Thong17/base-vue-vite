import { useAuthStore } from '@/stores/auth'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export function hasAuth(to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) {
  const query = to.query as { redirect?: string }
  const auth = useAuthStore()
  if (auth.isAuthenticated) {
    next({ path: query.redirect })
  } else {
    next()
  }
}
