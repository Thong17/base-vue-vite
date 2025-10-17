import { RouteRecordRaw } from 'vue-router'
import Invoice from '@/modules/invoice/views/index.vue'

const MODULE_NAME = 'Invoice'
const MODULE_PATH = '/invoice'

const ROUTES: Array<RouteRecordRaw> = [
  {
    name: MODULE_NAME,
    path: MODULE_PATH,
    component: Invoice,
    meta: {
      title: MODULE_NAME.toLowerCase(),
      middleware: [],
      moduleName: MODULE_NAME,
    },
  },
]

export const INVOICE_ROUTE = { ROUTES, MODULE_NAME, MODULE_PATH }
