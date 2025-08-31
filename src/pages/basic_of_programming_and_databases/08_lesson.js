export default async function Lesson_08() {
  const lesson = document.createElement('div')
  lesson.classList.add('lesson')

  try {
    const response = await fetch(
      '/public/pages/basic_of_programming_and_databases/08_lesson/08_lesson.html'
    )
    const htmlContent = await response.text()
    lesson.innerHTML = htmlContent
  } catch (error) {
    console.error('Ошибка загрузки HTML:', error)
  }

  return lesson
}
