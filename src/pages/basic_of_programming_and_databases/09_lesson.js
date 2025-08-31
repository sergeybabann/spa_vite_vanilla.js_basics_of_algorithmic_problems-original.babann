export default async function Lesson_09() {
  const lesson = document.createElement('div')
  lesson.classList.add('lesson')

  try {
    const response = await fetch(
      '/public/pages/basic_of_programming_and_databases/09_lesson/09_lesson.html'
    )
    const htmlContent = await response.text()
    lesson.innerHTML = htmlContent
  } catch (error) {
    console.error('Ошибка загрузки HTML:', error)
  }

  return lesson
}
