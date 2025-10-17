import { RouteRecordRaw } from 'vue-router'
import Overview from '@/modules/overview/views/index.vue'

const MODULE_NAME = 'Overview'
const MODULE_PATH = '/overview'

const ROUTES: Array<RouteRecordRaw> = [
  {
    name: MODULE_NAME,
    path: MODULE_PATH,
    component: Overview,
    meta: {
      title: MODULE_NAME.toLowerCase(),
      middleware: [],
      moduleName: MODULE_NAME,
    },
  },
]

export const OVERVIEW_ROUTE = { ROUTES, MODULE_NAME, MODULE_PATH }
