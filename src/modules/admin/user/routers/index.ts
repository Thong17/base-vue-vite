import { RouteRecordRaw } from 'vue-router'
import User from '@/modules/admin/user/views/index.vue'

const MODULE_NAME = 'User'
const MODULE_PATH = '/admin/user'

const ROUTES: Array<RouteRecordRaw> = [
  {
    name: MODULE_NAME,
    path: MODULE_PATH,
    component: User,
    meta: {
      title: MODULE_NAME.toLowerCase(),
      middleware: [],
      moduleName: MODULE_NAME,
    },
  },
]

export const USER_ROUTE = { ROUTES, MODULE_NAME, MODULE_PATH }
