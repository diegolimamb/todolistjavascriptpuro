// Seleção de Elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

// Funções
const saveTodo = (text) => {
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoTitle.textContent = text;
    todo.appendChild(todoTitle);
    
    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deleteBtn);
    
    todoList.appendChild(todo);

    todoInput.value = '';
    todoInput.focus();
};

const toggleForms = () => {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
};



// Eventos
todoForm.addEventListener("submit",(e) => {
    e.preventDefault();

    const inputValue = todoInput.value;
    if(inputValue){
        saveTodo(inputValue);
    };    
});

document.addEventListener("click",(el) => {
    const targetEl = el.target;
    const parentEl = targetEl.closest("div"); //Selecionar o elemento pai Div mais próximo

    if(targetEl.classList.contains("finish-todo")){
        parentEl.classList.toggle("done");
    };
    if(targetEl.classList.contains("edit-todo")){
        toggleForms();
    };
    if(targetEl.classList.contains("remove-todo")){
        parentEl.remove();
    }
});

cancelEditBtn.addEventListener("click",(e) => {
    e.preventDefault();
    
    toggleForms();
});