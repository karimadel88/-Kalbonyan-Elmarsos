'use strict'
let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodo(todos, filters)

// Search-text
document.querySelector('#search-text').addEventListener('input',  (e) => {
    filters.searchText = e.target.value
    // Render after take text to filter
    renderTodo(todos, filters)
})

// add new todo
document.querySelector('#new-todo').addEventListener('submit',  (e) => {
    e.preventDefault()
    todos.push({
        id:uuidv4(),
        text: e.target.elements.text.value,
        completed: false
    })
    saveTodos(todos)
    renderTodo(todos, filters)
    e.target.elements.text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change',  (e) => {
    filters.hideCompleted = e.target.checked
    renderTodo(todos, filters)
})