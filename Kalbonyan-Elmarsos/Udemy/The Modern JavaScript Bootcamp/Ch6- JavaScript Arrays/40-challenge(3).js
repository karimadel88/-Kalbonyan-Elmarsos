/**
 * 1. The first item
 * 2. The second item
 */

const todos = [
    'read a book', 'study two hours', 'play a football match', 'buy food', 'order cat food'
]
 todos.splice(2,1)
 todos.push('new work')
 todos.shift()

 console.log(`You have ${todos.length} todos!`)
 
todos.forEach(function(todo,index){
    console.log(`${index+1}. The ${todo}`)
})