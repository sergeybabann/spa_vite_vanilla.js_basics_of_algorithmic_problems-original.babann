export default function lecture_Theme_01() {
  const lecture = document.createElement('lecture')
  lecture.classList.add('lecture')
  lecture.innerHTML = `

<div class="header2__content">
<div class="header2__wrapper-1">
<!----- Bread Crumbs ----->
    <div class="header2__bread-crumbs">
        <a href="/home" class="back-link main__link-default">Home</a>                  
    </div><!--bread-crumbs-->

</div><!--header__wrapper-1-->
</div><!--header2 content -->

<!----- MAIN ----->
<div class="margin__main">
<div class="main">
    <div class="main__wrapper-1">
    <h1 class="main__title-1">Основы решения алгоритмических задач</h1>
    <h2 class="main__title-2">Учебный центр "Специалист"</h2>
        
        <h3 class="main__title-3">Уроки</h3>
        <!----- Lessons ----->
        <ul class="main__list-1">
        <li class="main__list-1-item">
            <a class="main__link-default" href="/algorithms_and_data_structures/basics_of_solving_algorithmic_problems/01_lesson">
            1. Урок - Выборка, таблицы истинности.</a>
        </li>

        </ul>
        </div><!--main__wrapper-1-->
        </div><!--main-->
        </div><!--margin__main
    `
  return lecture
}
