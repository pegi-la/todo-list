// Select DOM
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter");

// Event Listeners
todoBtn.addEventListener("click", saveLocal);
filterOption.addEventListener("click", filterTodo);

// Functions
makeTodoElement(JSON.parse(localStorage.getItem("todos")));

// Add todo in local storage
function saveLocal() {
  const item = todoInput.value.trim();
  if (item) {
    todoInput.value = "";
    const todos = !localStorage.getItem("todos")
      ? []
      : JSON.parse(localStorage.getItem("todos"));
      //create obj to create new item in local storage
    const currentTodo = {
      item: item,
      isCompleted: false,
    };
    todos.push(currentTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    // To add the currentTodo object in list
    makeTodoElement([currentTodo]);
  }
}

// Keydown event for add item
todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    todoBtn.click();
  }
});

// Remove todo from local storage
function removeTodo(index) {
  let todos = JSON.parse(localStorage.getItem("todos"));
  // If there are no todos, exit the function
  if (!todos) return; 
// Remove the item at the given index
  todos.splice(index, 1); 
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Function completed for local storage
function completeTodo(index, isComplete) {
  const todos = JSON.parse(localStorage.getItem("todos"));
  todos[index].isCompleted = isComplete;
  localStorage.setItem("todos", JSON.stringify(todos));
  }  


// Function to create todo element
function makeTodoElement(todoArray) {
  if (!todoArray) {
    return null;
  }
  todoArray.forEach((todoObject) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    todoDiv.innerHTML = `
     <li class="todo-item">${todoObject.item}</li>
     <button class="complete-btn"><i class="fas fa-check-circle"></i></button>
     <button class="trash-btn"><i class="fas fa-trash"></i></button>
  `;

    // Save the complete in local storage
    if (todoObject.isCompleted) {
      todoDiv.classList.add("complete");
    }

    const completeButton = todoDiv.querySelector(".complete-btn");
    const trashButton = todoDiv.querySelector(".trash-btn");

    completeButton.addEventListener("click", () => {
      const currentCard = completeButton.parentElement;
      const currentCardIndex = [...document.querySelectorAll(".todo")]
      .indexOf(currentCard);
      const isCompleted = !currentCard.classList.contains("complete");
      completeTodo(currentCardIndex, isCompleted);
      currentCard.classList.toggle("complete");
    });

   
    trashButton.addEventListener("click", () => {
      const currentCard = trashButton.parentElement;
      currentCard.classList.add("fall");
      const indexOfCurrentCard = [
        ...document.querySelectorAll(".todo .todo-item")
      ].indexOf(currentCard.querySelector(".todo-item"));
      removeTodo(indexOfCurrentCard);
      currentCard.addEventListener("transitionend", () => {
        currentCard.remove();
      });
    });

    todoList.appendChild(todoDiv);
  });
}
// Function to filter the option
function filterTodo(e) {
  const id = e.target.id;
  // Update the incomplete filter button
    document.querySelector(".on").classList.remove("on");
    document.getElementById(id).classList.add("on");
    todoList.classList = `todo-list ${id}`
}












