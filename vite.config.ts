import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {quasar, transformAssetUrls} from "@quasar/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({

  build: {
    rollupOptions: {
      external: ['']
    },
    chunkSizeWarningLimit: 1000000,
  },
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar({
      sassVariables: 'src/styles/variables.scss'
    }),

  ],

  resolve: {
    alias: {
      '@': '/src',
    },
  },

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
    ],
  },
})