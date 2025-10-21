import { routeGroup } from '@/helpers'
import { RouteRecordRaw } from 'vue-router'

const MODULE_NAME = 'User'
const MODULE_PATH = '/admin/user'
const IMPORT_PATH = '/src/modules/admin/user'

const ROUTES: Array<RouteRecordRaw> = [
  {
    name: MODULE_NAME,
    path: MODULE_PATH,
    redirect: MODULE_PATH + '/list',
    meta: {
      title: MODULE_NAME.toLowerCase(),
      middleware: [],
      moduleName: MODULE_NAME,
      icon: 'local:profile-circle',
    },
    children: routeGroup(MODULE_NAME, MODULE_PATH, IMPORT_PATH),
  },
]

export const USER_ROUTE = { ROUTES, MODULE_NAME, MODULE_PATH }
