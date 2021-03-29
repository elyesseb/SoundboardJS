const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list');

function addTodo() {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);
    if (todoInput.value === "") {
        return null
    }

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Supprimer';
    deleteButton.classList.add('delete_btn')
    todoDiv.appendChild(deleteButton);

    todoList.appendChild(todoDiv);

    todoInput.value = ""
}

function deleteItem(e) {
    const item = e.target;
    if (item.classList[0] === "delete_btn") {
        const todo = item.parentElement;
        todo.remove()
    }
}

todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteItem)