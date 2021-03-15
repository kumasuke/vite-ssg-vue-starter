import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import WindiCSS from 'vite-plugin-windicss'
import ViteComponents from 'vite-plugin-components'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const SitemapPlugin = require('rollup-plugin-sitemap')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue', 'md'],
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/vite-plugin-components
    ViteComponents({
      extensions: ['vue', 'md'],
    }),

    // https://github.com/windicss/vite-plugin-windicss
    WindiCSS({
      safelist: [],
    }),

    // https://vitejs.dev/guide/api-plugin.html#conditional-application
    // https://github.com/JoaoSouMoreira/rollup-plugin-sitemap
    {
      ...SitemapPlugin({
        baseUrl: 'https://example.com',
        contentBase: 'dist',
        routes: [
          { path: '/', name: 'Home' },
          { path: '/test', name: 'Test' },
        ],
      }),
      enforce: 'post',
      apply: 'build',
    },
  ],
  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
    ],
    exclude: [
      'vue-demi',
    ],
  },
})
