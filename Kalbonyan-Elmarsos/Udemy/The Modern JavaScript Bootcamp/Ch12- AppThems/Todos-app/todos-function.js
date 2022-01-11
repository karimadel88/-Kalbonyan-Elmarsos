'use strict'

// Read exicting todos from localStorage
const getSavedTodos =  () => {
    const todosJSON = localStorage.getItem('todos')
    return (todosJSON) ?  (JSON.parse(todosJSON)) : []
}

// Save Todos
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Toggle Todo
const toggleTodo = (id) =>{
    const todo = todos.find((todo) => {
        return todo.id === id
    })

    if (todo){
        todo.completed = !todo.completed
    }
}

// Remove by id
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) =>{
        return todo.id === id
    })

    if(todoIndex > -1){
        todos.splice(todoIndex,1)
    }
}

// Render todos app
const renderTodo =  (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo) => {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generetSummery(filteredTodos))

 
    if(filteredTodos.length>0){
        filteredTodos.forEach(function (todo) {
            document.querySelector('#todos').appendChild(generateToDoDom(todo))
        })
    }else{
        const messEl = document.createElement('p');
        messEl.classList.add('empty-message')
        messEl.textContent ='No Todos To Do';
        document.querySelector('#todos').appendChild(messEl)
    }

}

// Generete dom
const generateToDoDom = (todo) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkbox =document.createElement('input')
    const textEl = document.createElement('span')
    const removeButton = document.createElement('button')

    // Setup todo checkbox
    checkbox.setAttribute('type','checkbox')
    checkbox.checked = todo.completed
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('change',() => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodo(todos,filters)
    })

    // Setup todo text
    textEl.textContent = todo.text
    containerEl.appendChild(textEl)

    // Setup container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    // Setup remove button
    removeButton.textContent = 'Remove'
    removeButton.classList.add('button','button--text')
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click',() =>{
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodo(todos,filters)
    })
  
    return todoEl

}

// Generete summery
const generetSummery = (incompleteTodos) => {
    const summary = document.createElement('h2')  
    summary.classList.add('list-title')  
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}
