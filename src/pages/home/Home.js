export default function Home() {
  const home = document.createElement('home')
  home.classList.add('home')
  home.innerHTML = `
  <!---------- Header Content ---------->
  <header>
        <div class="header__content">
            <div class="header__wrapper-1">
            <h1>Курсы по Информационным технологиям</h1>
            <h2>Home</h2>
            </div><!--header__wrapper-1-->
            
            <!-- Menu Navigation -->
            <div class="header__menu">
                <ul class="header__menu-list">
                <li class="header__menu-item">
                    <a class="header__menu-link" href="/">Home</a>
                </li>
                              
                </ul>
            </div><!--header__menu-->
            </div><!--header__content-->
            </header>


            <!---------- Main Content ---------->
            <main>
    <div class="main">
        <!---------- Основы программирования и баз данных---------->
        <h3 id="programming_basics" class="main__title-1">Основы программирования и баз данных</h3>
        <ul class="main__list-1">
            <li class="main__list-1-item"><a href="/basic_of_programming_and_databases" class="main__link-default">
            Основы программирования и баз данных. Учебный центр "Специалист".
            </a></li> 
        </ul>

        <!---------- Алгоритмы и структуры данных ---------->
        <h3 id="algorithms_and_data_structures" class="main__title-1">Алгоритмы и структуры данных</h3>
        <ul class="main__list-1">
            <li class="main__list-1-item"><a href="
            /algorithms_and_data_structures/basics_of_solving_algorithmic_problems" class="main__link-default">
            Основы решения алгоритмических задач. Учебный центр "Специалист".
            </a></li> 
        </ul>

        <!---------- JAVA ---------->
         <h3 class="main__title-1">JAVA</h3>
         <ul class="main__list-1">
            <li class="main__list-1-item"><a href="/lecture/theme_01" class="main__link-default">
            Практикум программирования. Учебный центр "Специалист".
            </a></li> 
        </ul>

        <!---------- JAVA ---------->
         <h3 class="main__title-1">JAVA</h3>
         <ul class="main__list-1">
            <li class="main__list-1-item"><a href="/lecture/theme_01" class="main__link-default">
            Практикум программирования. Центр "Специалист".
            </a></li> 
        </ul>

        <!---------- JAVA ---------->
         <h3 class="main__title-1">JAVA</h3>
         <ul class="main__list-1">
            <li class="main__list-1-item"><a href="/lecture/theme_01" class="main__link-default">
            Практикум программирования. Центр "Специалист".
            </a></li> 
        </ul>

        <!---------- JAVA ---------->
         <h3 class="main__title-1">JAVA</h3>
         <ul class="main__list-1">
            <li class="main__list-1-item"><a href="/lecture/theme_01" class="main__link-default">
            Практикум программирования. Центр "Специалист".
            </a></li> 
        </ul>

        <!---------- JAVA ---------->
         <h3 class="main__title-1">JAVA</h3>
         <ul class="main__list-1">
            <li class="main__list-1-item"><a href="/lecture/theme_01" class="main__link-default">
            Практикум программирования. Центр "Специалист".
            </a></li> 
        </ul>
    </div><!--main-->
    </main>
            


    <!---------- Sidebar2 ---------->
            <div class="sidebar2">
                <div class="sidebar2__title">
                    Содержание
                </div>
                
                <ul class="sidebar2__list">
                <!----- Основы программирования ----->
                    <li class="sidebar2__item">
                    <a href="#programming_basics" class="sidebar2__link">
                    Основы программирования</a></li>

                    <!----- Алгоритмы и структуры данных ----->
                    <li class="sidebar2__item">
                    <a href="#algorithms_and_data_structures" class="sidebar2__link">
                    Алгоритмы и структуры данных
                    </a></li>
                    <li class="sidebar2__item"><a class="sidebar2__link">LINK</a></li>
                </ul>
            </div><!--sidebar2-->
    `
  return home
}

// console.log('Home Page Script Loaded');
