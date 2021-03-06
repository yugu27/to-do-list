//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
//Event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
//Functions

function addTodo(event) {
  // Prevent form from submitting
  event.preventDefault();
  // Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // Create list
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //Check Mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check" ></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //Trash Button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash" ></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  // Append to List
  todoList.appendChild(todoDiv);
  // Clear tood Input value
  todoInput.value = "";
}

// Delete Todo
function deleteCheck(events) {
  const item = events.target;
  // Delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }
  // Check Mark todo
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    const trash_btn = todo.children[2];
    trash_btn.remove();
  }
}
