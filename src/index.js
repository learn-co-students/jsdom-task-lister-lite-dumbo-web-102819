let toDoUl = document.getElementById("tasks");


document.addEventListener("submit", function(evt){
   evt.preventDefault()
   let newLi = document.createElement("li")
   let newTask = evt.target["new-task-description"].value
      newLi.innerText = newTask
      toDoUl.append(newLi)
      console.log(toDoUl)

});
