export default function Home() {
  const home = document.createElement('home')
  home.classList.add('home')
  home.innerHTML = `
        <div class="header__content">
            <div class="header__wrapper-1">
            <h1>Курс JavaScript</h1>
            <h2>Home</h2>
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
            </div>
            
            <div class="sidebar2">
                <div class="sidebar2__title">
                    Содержание
                </div>
                
                <ul class="sidebar2__list">
                    <li class="sidebar2__item"><a class="sidebar2__link">LINK</a></li>
                    <li class="sidebar2__item"><a class="sidebar2__link">LINK</a></li>
                    <li class="sidebar2__item"><a class="sidebar2__link">LINK</a></li>
                </ul>
            </div>
        </div>
    `
  return home
}

// console.log('Home Page Script Loaded');
