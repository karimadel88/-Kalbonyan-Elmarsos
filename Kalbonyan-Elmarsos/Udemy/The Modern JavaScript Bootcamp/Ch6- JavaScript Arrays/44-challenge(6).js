/**
 * 
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


// Function to get things to do it
const getTingsToDo = function (todos) {
    return todos.filter(function (todo){
        const isCompleted = todo.completed
        return !isCompleted // isCompleted === false
    })
}

console.log(getTingsToDo(todos))

// Function to delete some work
function deleteToDo(todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1 && todos.completed===true) {
        todos.splice(index, 1)
    }
}




