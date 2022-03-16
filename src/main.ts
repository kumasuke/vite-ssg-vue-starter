import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'layouts-generated'
import generatedRoutes from 'virtual:generated-pages'
import 'virtual:windi.css'
import App from './App.vue'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  {
    routes,
    // https://next.router.vuejs.org/guide/advanced/scroll-behavior.html
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition)
        return savedPosition
      else
        return { top: 0 }
    },
  },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))
  },
)
