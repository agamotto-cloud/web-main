
import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0'
  },
  envDir: './env',
  build: {
    modulePreload: { polyfill: false },
    manifest: true,
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        assetFileNames: '[name].[ext]',

      },
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html'),
      },
    },
  },
  base:"main"
})
