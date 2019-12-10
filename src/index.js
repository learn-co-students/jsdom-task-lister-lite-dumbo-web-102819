document.addEventListener("DOMContentLoaded", () => {

  let ul = document.getElementById("tasks");
  let form = document.getElementById("create-task-form");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); //stops any default action

    // let input_value = document.getElementById("new-task-description").value;
    // let input_value = e.target.children[0];
    // let input_value = e.target.querySelector('[name=new-task-description').value;
    let input_value = e.target["new-task-description"].value;

    //create new element li tag
    let li = document.createElement("li");

    //create new button
    let button = document.createElement('BUTTON');
    button.innerHTML = "X";
    button.onclick = function(e) {
      e.target.parentNode.remove();
    }
    
    //appends both text and button
    li.append(input_value, button);

    ul.append(li);
    // e.target.reset();
  });
  


});
