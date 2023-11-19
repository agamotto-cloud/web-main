
import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'web-main',
      filename: 'web-main.js',
      // 需要暴露的模块
      exposes: {
          './main': resolve(__dirname, './src/index/main.js') ,
      },
     // shared: ['vue']
  })
  ],
  server: {
    host: '0.0.0.0',
    port: 9999
  },
  preview: {
    host: '0.0.0.0',
    port: 9999
  },
  envDir: './env',
  
  build: {
    assetsDir: '',
    target: 'esnext',
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
  base: "/main/"
})
