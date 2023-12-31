// @ts-ignore
import path from 'path'
import { defineConfig } from 'vite'
// @ts-ignore
import packageJson from './package.json'
import banner from 'vite-plugin-banner'
import removeConsole from 'vite-plugin-remove-console'
import { createMpaPlugin } from 'vite-plugin-virtual-mpa'

const base = '/'

module.exports = defineConfig({
  base: base,
  plugins: [
    banner(`/**\n * name: ${packageJson.name}\n * version: v${packageJson.version}\n * description: ${packageJson.description}\n * author: ${packageJson.author}\n * homepage: ${packageJson.homepage}\n */`),
    removeConsole(),
    createMpaPlugin({
      pages: [
        {
          name: 'index',
          filename: 'index.html',
          entry: '/src/pages/index/main.ts',
          template: 'src/pages/index/index.html',
        }
      ]
    })
  ],
  server: {
    hmr: true
  },
  build: {
    minify: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
})