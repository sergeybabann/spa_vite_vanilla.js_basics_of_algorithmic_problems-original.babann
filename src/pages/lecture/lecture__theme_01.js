export default function lecture_Theme_01() {
  const lecture = document.createElement('lecture')
  lecture.classList.add('lecture')
  lecture.innerHTML = `

<div class="header2__content">
<div class="header2__wrapper-1">
<!----- Bread Crumbs ----->
    <div class="header2__bread-crumbs">
        <a href="/lecture" class="back-link main__link-default">Лекция</a>                  
    </div><!--bread-crumbs-->

</div><!--header__wrapper-1-->
</div><!--header2 content -->

<!----- MAIN ----->
<div class="margin__main">
<div class="main">
    <div class="main__wrapper-1">
    <h1 class="main__title-1">Тема 1: Тема 1</h1>
        
        <h3 class="main__title-3">Уроки</h3>
        <!----- Lessons ----->
        <ul class="main__list-1">
        <li class="main__list-1-item">
            <a class="main__link-default" href="/lecture/theme_01/lesson_01">1. Урок</a>
        </li>

        </ul>
        </div><!--main__wrapper-1-->
        </div><!--main-->
        </div><!--margin__main
    `
  return lecture
}
