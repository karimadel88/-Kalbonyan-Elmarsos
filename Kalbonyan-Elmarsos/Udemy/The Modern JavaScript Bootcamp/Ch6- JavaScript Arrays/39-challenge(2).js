/**
 * Delete the 3rd item
 * Add a new item onto the end
 * Remove the first item from the last
 */

const todos = [
    'read a book', 'study two hours', 'play a football match', 'buy food', 'order cat food'
]

// Delete the 3rd item
todos.splice(2,1)
// Add a new item onto the end
todos.push('New work')
// Remove the first item 
todos.shift()

console.log(`You have ${todos.length} todos!`)
console.log(todos)