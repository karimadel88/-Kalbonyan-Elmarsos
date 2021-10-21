/**
 * Create an array with five todos
 * You have x todos
 * print the first and second to last items
 */

const todos = [
    'read a book', 'study two hours', 'play a football match', 'buy food', 'order cat food'
]

let x = todos.length
console.log(`You have ${x} todos today !`)

console.log(`Todo: ${todos[0]}`)
console.log(`Todo: ${todos[x-2]}`)
// console.log(`Todo: ${todos[x-1]}`)


