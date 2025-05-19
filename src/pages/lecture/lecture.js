export default function Lecture() {
  const lecture = document.createElement('lecture')
  lecture.classList.add('lecture')
  lecture.innerHTML = `
    <div class="header__content">
            <div class="header__wrapper-1">
            <h1 class="header__title-1">Основы алгоритмических задач
            <span class="header__title-3">Специалист</span>
            </h1>
            
            <h2 class="header__title-2">Лекция</h2>
            </div><!--header__wrapper-1-->
            
            <!-- Menu Navigation -->
            <div class="header__menu">
                <ul class="header__menu-list">
                <li class="header__menu-item">
                    <a class="header__menu-link" href="/">Home</a>
                </li>
                <li class="header__menu-item">
                    <a class="header__menu-link" href="/lecture">Лекция</a>
                </li>
                </ul>
            </div><!--header__menu-->
            </div><!--header__content-->
            
    <!-- Main Content -->
    <div class="main">
        <h3 class="main__title-1">Лекция</h3>
        <ul class="main__list-1">
            <li class="main__list-1-item"><a href="/lecture/theme_01" class="main__link-default">1. Тема</a></li> 
            
        </ul>
    </div>  
    `
  return lecture
}

// console.log('About Page Script Loaded');
