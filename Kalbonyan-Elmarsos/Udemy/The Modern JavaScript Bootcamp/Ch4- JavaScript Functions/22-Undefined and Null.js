let name = 'karim'
console.log(name) // karim

// Undefined For Variables
let age 
// age = 5
console.log(age) // undefined

if (age === undefined){
    console.log('Please provide a name')
}else{
    console.log('Welcome ....')
}

// Undefined For Function Arguments
// Undefined as Function return default value
let square = function (num){
    console.log(num*num)
}
// square() // Will print undefined
let valueOne = square()
console.log(valueOne) // undefined

// Example
let age = 27 
age = undefined
console.log(age) // Will print undefined

// Null as assigned value
age = null
console.log(age) // Will print Null