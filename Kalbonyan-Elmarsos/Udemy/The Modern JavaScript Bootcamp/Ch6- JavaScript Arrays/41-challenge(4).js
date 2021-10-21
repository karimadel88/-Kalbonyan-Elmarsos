/**
 * 
 */

const todos = [
    'read a book', 'study two hours', 'play a football match', 'buy food', 'order cat food'
]
 todos.splice(2,1)
 todos.push('new work')
 todos.shift()

 console.log(`You have ${todos.length} todos!`)

 for (let index = 0; index < todos.length; index++) {
     const element = todos[index];
     console.log(`${index + 1}. ${element}`)
     
 }
