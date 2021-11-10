// Create a form with a single input for todo text
// Setup an submit handler and cancel the deafult action 
// Add new item to the todos array 
// Rerender the application
// Clear the input filed value

let todos = [{
    text : 'Read a book',
    completed : false
},{
    text : 'Study two hours',
    completed : false
},{
    text : 'Play a football match',
    completed : false
},{
    text : 'Buy food',
    completed : false
},{
    text : 'Order cat food',
    completed : true
}
]

const filters = {
    searchText : null
}

const renderTodos = function (todos,filters){
    const filteredTodos = todos.filter(function(todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    // filter incomplated
    const incomplatedTodos = filteredTodos.filter(function(todo){
        return !todo.completed
    })


    // add text to show length of incomplated todos
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incomplatedTodos.length} todos left`
    document.querySelector('#todos-area').appendChild(summary)

    // add to html file n of incomplated todos by pragraoh element
    filteredTodos.forEach(function(todo){
        const p = document.createElement('p')
        if(!todo.completed){
        p.textContent = todo.text
        document.querySelector('#todos-area').appendChild(p)
        }
    })    
}


document.querySelector("#search-todos").addEventListener('input',function(e){
    filters.searchText = e.target.value
    renderTodos(todos,filters)
})

document.querySelector("#new-todo").addEventListener('submit',function(e){
    e.preventDefault()
    todos.push({
        text:e.target.elements.text.value,
        completed:false
    })
    renderTodos(todos,filters)
    e.target.elements.text.value = ''
})
