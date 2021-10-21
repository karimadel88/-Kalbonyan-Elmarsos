/**
 * 1. Convert array to array of object -> text, completed
 * 2. Creat function to emvie what you do
 * 3. 
 */

//  const todos = [
//     'Read a book', 'Study two hours', 'Play a football match', 'Buy food', 'Order cat food'
// ]

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
    completed : true
},{
    text : 'Order cat food',
    completed : true
}

]

function deleteToDo(todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1 && todos.completed===true) {
        todos.splice(index, 1)
    }
}

deleteToDo(todos, 'Read A book')
console.log(todos)




