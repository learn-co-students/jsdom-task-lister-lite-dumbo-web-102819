document.addEventListener("DOMContentLoaded", () => {
  let newTaskForm = document.querySelector("#create-task-form")
  let thingsToDo = document.querySelector("#tasks")

  


  newTaskForm.addEventListener("submit", function (evt) {
    evt.preventDefault() 
    let newTaskString = evt.target["new-task-description"].value 
    let newLi = document.createElement("li")
    newLi.innerText = newTaskString 
    let button = document.createElement("button")
    button.innerText = "Delete"
    button.className = "delete"
    let editButton = document.createElement("button")
    editButton.innerText = "edit"
    editButton.className = "edit"
    newLi.append(button)
    newLi.append(editButton)
    thingsToDo.append(newLi)
    evt.target.reset()

  })


  thingsToDo.addEventListener("click", function(evt) {
    if (evt.target.className === "delete") {
      evt.target.parentNode.remove()
    }
  })

  // thingsToDo.addEventListener("click", function(evt) {
  //   if (evt.target.className === "edit") {
  //     evt.target.parentNode.innerText
  //   }
  // })

});
