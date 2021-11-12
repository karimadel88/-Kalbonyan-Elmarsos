/**
 * 1. Add event handler to checkbox
 * 1. Modify the correct objects completed prperty
 * 3. Save and render 
 */

// Read exicting todos from localStorage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    }else {
        return []
    }
}

// Save Todos
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Toggle Todo
const toggleTodo = function (id) {
    const todo = todos.find(function(todo){
        return todo.id === id
    })

    if (todo !== undefined){
        todo.completed = false
    }
}

// Remove by id
const removeTodo = function(id){
    const todoIndex = todos.findIndex(function(note){
        return note.id === id
    })

    if(todoIndex > -1){
        todos.splice(todoIndex,1)
    }
}

// Render todos app
const renderTodo = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generetSummery(filteredTodos))
    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateToDoDom(todo))
    })

}

// Generete dom
const generateToDoDom = function (todo) {
    const todoEl = document.createElement('div')
    const checkbox =document.createElement('input')
    const textEl = document.createElement('span')
    const removeButton = document.createElement('button')

    // Setup todo checkbox
    checkbox.setAttribute('type','checkbox')
    checkbox.checked = todo.completed
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change',function(){
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
    removeButton.addEventListener('click',function(){
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodo(todos,filters)
    })

    return todoEl


}

// Generete summery
const generetSummery = function (incompleteTodos) {
    const summary = document.createElement('h2')    
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}
