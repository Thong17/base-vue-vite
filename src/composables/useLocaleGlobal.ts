import i18n from '@/plugins/localization'

export function useI18nGlobal() {
  const t = i18n.global.t
  const locale = i18n.global.locale

  return { t, locale }
}
