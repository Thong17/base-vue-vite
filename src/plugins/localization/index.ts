import { createI18n } from 'vue-i18n'
import EN from './en/index.json'
import KH from './kh/index.json'
import { OVERVIEW_EN, OVERVIEW_KH } from '@/modules/overview/locales'
import { INVOICE_EN, INVOICE_KH } from '@/modules/invoice/locales'
import { USER_EN, USER_KH } from '@/modules/admin/user/locales'

const i18n = createI18n({
  locale: 'kh',
  fallbackLocale: 'en',
  messages: {
    en: {
      ...EN,
      ...OVERVIEW_EN,
      ...INVOICE_EN,
      ...USER_EN,
    },
    kh: {
      ...KH,
      ...OVERVIEW_KH,
      ...INVOICE_KH,
      ...USER_KH,
    },
  },
})

export default i18n
