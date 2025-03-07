import pinia from '@/stores'
import router from '@/router'

import type { App } from 'vue'

import header from '@/components/layout/header.vue'

export function registerPlugins(app: App) {
  app.use(router).use(pinia)
  app.component('app-header', header)
}
