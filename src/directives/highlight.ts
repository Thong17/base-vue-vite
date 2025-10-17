import type { Directive } from 'vue'

const vHighlight: Directive = {
  mounted(el) {
    el.classList = 'bg-warning'
  },
}

export default vHighlight
