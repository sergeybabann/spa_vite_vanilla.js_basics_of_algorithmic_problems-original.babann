const routes = {
  '/': () => import('../pages/home/Home.js'),

  /*-------------------- theory --------------------*/
  '/lecture': () => import('../pages/lecture/lecture.js'),

  /*---------- 01 THEME ----------*/
  '/lecture/theme_01': () => import('../pages/lecture/lecture__theme_01.js'),

  /*---------- LESSONS ----------*/
  '/lecture/theme_01/lesson_01': () =>
    import('../pages/lecture/01_theme/01_lesson.js'),
}

const loadRoute = async (path) => {
  // Проверяем, если путь указывает на статический файл
  if (path.startsWith('/pages/')) {
    window.location.href = path // Перенаправляем браузер на статический HTML-файл
    return
  }

  // Загрузка компонентов через маршруты
  const loadComponent = routes[path] || routes['/']
  try {
    const module = await loadComponent()
    appContainer.innerHTML = '' // Очистка перед загрузкой новой страницы
    appContainer.appendChild(await module.default())
  } catch (error) {
    console.error('Ошибка загрузки страницы:', error)
    appContainer.innerHTML = '<h2>Ошибка загрузки страницы</h2>'
  }
}

export default routes
