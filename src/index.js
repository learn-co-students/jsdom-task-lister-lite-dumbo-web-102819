document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById("create-task-form");
  let ul = document.getElementById("tasks");

  form.addEventListener("submit", function(event){
    event.preventDefault();
    let newLi = event.target.querySelector("#new-task-description").value.replace("'", "").replace(`"`, "").replace('"', "");
    let li = document.createElement("li")
    li.innerText = newLi;
    let f = document.createElement("form");
    f.id = `${newLi}-delete`
    li.id = `${newLi}-delete`
    f.innerHTML = `<input type='submit' value='Delete Task' id='${newLi}-delete'>`
    f.addEventListener("submit", function(event){
      event.preventDefault();
      let thisForm = document.querySelector(`form#${this.id}`);
      let thisToDo = document.querySelector(`li#${thisForm.id}`);
      thisToDo.parentNode.removeChild(thisToDo);
      thisForm.parentNode.removeChild(thisForm);
    })
    ul.append(li);
    ul.append(f);
  })
});
