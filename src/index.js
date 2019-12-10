document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskForm = document.getElementById('create-task-form')
  const newTaskDescription = document.getElementById('new-task-description')
  const tasks = document.getElementById('tasks')
  newTaskForm.addEventListener("submit", createNewTask)
})

const createNewTask = event => {
  event.preventDefault()
  const newTask = document.createElement('li')
  const newTaskDescription = document.getElementById('new-task-description')
  newTask.innerText = newTaskDescription.value

  appendNewTask(newTask)
  event.target.reset()
}

function appendNewTask(task) {
  document.getElementById('tasks').appendChild(task)
}