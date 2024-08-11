document.getElementById('add-todo').addEventListener('click', function() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();
    
    if (todoText !== "") {
        const todoList = document.getElementById('todo-list');
        const listItem = document.createElement('li');

        const taskText = document.createElement('span');
        taskText.textContent = todoText;
        taskText.addEventListener('click', function() {
            this.parentElement.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('dlt');
        deleteButton.addEventListener('click', function() {
            this.parentElement.remove();
        });

        listItem.appendChild(taskText);
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);

        todoInput.value = "";
    }
});
