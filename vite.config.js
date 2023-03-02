/*
 * @Author: 董文强 826112946@qq.com
 * @Date: 2023-02-20 09:07:27
 * @LastEditors: 董文强 826112946@qq.com
 * @LastEditTime: 2023-02-20 09:08:56
 * @FilePath: \web-main\vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0'
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html'),
      },
    },
  },
})
