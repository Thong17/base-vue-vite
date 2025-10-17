import { addIcon, type IconifyIcon } from '@iconify/vue'
import solarIcons from './local-icons.json'

function registerIcons(prefix: string, icons: Record<string, IconifyIcon>) {
  for (const [key, icon] of Object.entries(icons)) {
    addIcon(`${prefix}:${key}`, icon)
  }
}

registerIcons(solarIcons.prefix, solarIcons.icons)
