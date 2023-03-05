import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import graphqlPlugin from 'vite-plugin-graphql';

// https://vitejs.dev/config/
export default defineConfig({

  build: {
    rollupOptions: {
      external: ['graphql']
    }
  },
  plugins: [
      graphqlPlugin,
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