/**
 * 1- Setup a div contain for todos 
 * 2- Setup filters (searchText) and wire up a new filter input to cange it
 * 3- Create a renderTodos function to render and rerender the lastest filtered data
 * 
 */

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
    document.querySelector("#todos-area").innerHTML = 'Test'


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



// Listen for new todo creation
document.querySelector('#add-todo').addEventListener('click',function(e){
    console.log('Add a new todo ...')
})

// Listen for todo to change
document.querySelector("#new-todo").addEventListener('input',function(e){
    console.log(e.target.value)
})