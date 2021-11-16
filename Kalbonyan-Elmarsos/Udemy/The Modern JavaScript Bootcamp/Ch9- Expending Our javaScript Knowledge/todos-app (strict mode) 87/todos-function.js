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
    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateToDoDom(todo))
    })

}

// Generete dom
const generateToDoDom = (todo) => {
    const todoEl = document.createElement('div')
    const checkbox =document.createElement('input')
    const textEl = document.createElement('span')
    const removeButton = document.createElement('button')

    // Setup todo checkbox
    checkbox.setAttribute('type','checkbox')
    checkbox.checked = todo.completed
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change',() => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodo(todos,filters)
    })

    // Setup todo text
    textEl.textContent = todo.text
    todoEl.appendChild(textEl)

    // Setup remove button
    removeButton.textContent = 'x'
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
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}
