import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/routes'
import components from '@/plugins/components'
import directives from '@/directives'
import mixins from '@/mixins'
import pinia from '@/plugins/pinia'
import i18n from '@/plugins/localization'
import '@/styles/index.css'
import '@/plugins/iconify'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(components)
app.use(directives)
app.use(mixins)
app.use(i18n)

app.mount('#app')
