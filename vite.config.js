import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: './', // Указывает корневую директорию проекта

  publicDir: 'public', // Указывает, что папка public содержит статические файлы

  server: {
    open: true, // Автоматически открывать браузер

    historyApiFallback: {
      rewrites: [
        // Перенаправление всех запросов, начинающихся с /pages/, на статические файлы
        { from: /^\/pages\/.*$/, to: (context) => context.parsedUrl.pathname },
      ],
    },
  },

  build: {
    rollupOptions: {
      input: resolve(__dirname, 'index.html'), // Укажите основной файл входа для SPA
    },
  },

  middlewareMode: true,
  configureServer: (server) => {
    server.middlewares.use((req, res, next) => {
      if (req.url.startsWith('/pages/')) {
        return next() // Пропускаем запрос
      }
      next()
    })
  },

  plugins: [
    {
      name: 'html-auto-reload',
      handleHotUpdate({ file, server }) {
        if (file.endsWith('.html')) {
          server.ws.send({ type: 'full-reload' })
        }
      },
    },
  ],
})
