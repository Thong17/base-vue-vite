import type { App } from 'vue'
import vHighlight from './highlight'

export default {
  install(app: App) {
    app.directive('highlight', vHighlight)
  },
}
