/**
 * add eventListener for new todo creation
 */

let todos = [{
    text : 'Read a book',
    completed : false
},{
    text : 'Study two hours',
    completed : true
},{
    text : 'Play a football match',
    completed : true
},{
    text : 'Buy food',
    completed : false
},{
    text : 'Order cat food',
    completed : true
}
]

// filter incomplated
const incomplatedTodos = todos.filter(function(todo){
    return !todo.completed
})

// add text to show length of incomplated todos
const summary = document.createElement('h2')
summary.textContent = `You have ${incomplatedTodos.length} todos left`
document.querySelector('body').appendChild(summary)
const todosP = document.createElement('p')

// add to html file n of incomplated todos by pragraoh element
todos.forEach(function(todo){
    const p = document.createElement('p')
    if(!todo.completed){
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
    }
})


// Listen for new todo creation
document.querySelector('#add-todo').addEventListener('click',function(e){
    console.log('Add a new todo ...')
})