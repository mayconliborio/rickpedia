import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import graphqlPlugin from 'vite-plugin-graphql';

// https://vitejs.dev/config/
export default defineConfig({

  build: {
    rollupOptions: {
      external: ['graphql', 'src/assets/image/logo.png']
    },
    chunkSizeWarningLimit: 1000000,
  },
  plugins: [
      graphqlPlugin,
    vue({
      // template: { transformAssetUrls }
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