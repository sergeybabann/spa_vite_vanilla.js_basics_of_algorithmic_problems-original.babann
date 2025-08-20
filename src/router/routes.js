const routes = {
  '/': () => import('../pages/home/Home.js'),

  /*-------------------- ALGORITHMS AND DATA STRUCTURES --------------------*/
  /*-- Basics of solving algorithmic problems --*/
  '/algorithms_and_data_structures/basics_of_solving_algorithmic_problems':
    () =>
      import(
        '../pages/algorithms_and_data_structures/basics_of_solving_algorithmic_problems/main_page.js'
      ),
  /*-- basics of solving algorithmic problems - 01_Lesson --*/
  '/algorithms_and_data_structures/basics_of_solving_algorithmic_problems/01_lesson':
    () =>
      import(
        '../pages/algorithms_and_data_structures/basics_of_solving_algorithmic_problems/01_lesson.js'
      ),

  /*-------------------- PROGRAMMING BASICS --------------------*/
  /*-- Programming basics --*/
  '/programming_basics': () =>
    import('../pages/programming_basics/main_page.js'),
  /*-- basics of solving algorithmic problems - 01_Lesson --*/
  '/programming_basics/01_lesson': () =>
    import('../pages/programming_basics/01_lesson.js'),

  /*-- basics of solving algorithmic problems - 02_Lesson --*/
  '/programming_basics/02_lesson': () =>
    import('../pages/programming_basics/02_lesson.js'),

  /*-- basics of solving algorithmic problems - 03_Lesson --*/
  '/programming_basics/03_lesson': () =>
    import('../pages/programming_basics/03_lesson.js'),

  /*-- basics of solving algorithmic problems - 04_Lesson --*/
  '/programming_basics/04_lesson': () =>
    import('../pages/programming_basics/04_lesson.js'),

  /*-- basics of solving algorithmic problems - 05_Lesson --*/
  '/programming_basics/05_lesson': () =>
    import('../pages/programming_basics/05_lesson.js'),

  /*-- basics of solving algorithmic problems - 06_Lesson --*/
  '/programming_basics/06_lesson': () =>
    import('../pages/programming_basics/06_lesson.js'),

  /*-- basics of solving algorithmic problems - 07_Lesson --*/
  '/programming_basics/07_lesson': () =>
    import('../pages/programming_basics/07_lesson.js'),
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
