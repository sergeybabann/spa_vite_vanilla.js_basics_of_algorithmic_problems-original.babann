import routes from "./routes.js";

const appContainer = document.getElementById("app");

const loadRoute = async (path) => {
  const loadComponent = routes[path] || routes["/"];
  try {
    const module = await loadComponent();
    appContainer.innerHTML = ""; // Очистка перед загрузкой новой страницы
    appContainer.appendChild(await module.default());
  } catch (error) {
    console.error("Ошибка загрузки страницы:", error);
    appContainer.innerHTML = "<h2>Ошибка загрузки страницы</h2>";
  }
};

// Функция навигации без перезагрузки
const navigateTo = (url) => {
  history.pushState(null, null, url);
  loadRoute(url);
};

// Отслеживание нажатий на ссылки
document.addEventListener("click", (event) => {
  const target = event.target.closest("a");

  if (!target) return;

  const href = target.getAttribute("href");

  // Если ссылка ведет на статический HTML-файл или ZIP-архив, позволяем стандартное поведение
  if (href.match(/\.(html|zip)$/)) {
    return;
  }

  if (href.startsWith("/")) {
    event.preventDefault();
    navigateTo(href);
  }
});

// Обработчик истории браузера
window.addEventListener("popstate", () => loadRoute(window.location.pathname));

// Инициализация маршрутизации
loadRoute(window.location.pathname);
