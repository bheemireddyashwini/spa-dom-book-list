

const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");

// Function to create a new todo item
function createTodoItem(todoText) {
  // Create list item element
  const li = document.createElement("li");

  // Create text node for the todo item
  const todoTextNode = document.createTextNode(todoText);

  // Create delete button
  const deleteBtn = document.createElement("i");
  //deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("fas", "fa-trash-alt");

  // Append text and button to list item
  li.appendChild(todoTextNode);
  li.appendChild(deleteBtn);

  // Add event listener to delete the todo on click
  deleteBtn.addEventListener("click", () => {
    todoList.removeChild(li);
  });

  // Add the list item to the todo list
  todoList.appendChild(li);
}

// Add event listener to the "Add" button
addTodoBtn.addEventListener("click", () => {
  const todoText = todoInput.value.trim();

  // Only add the todo if the input is not empty
  if (todoText !== "") {
    createTodoItem(todoText);
    // Clear the input field after adding
    todoInput.value = "";
  }
});

// Optional: Allow pressing "Enter" to add todo
todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTodoBtn.click();
  }
});