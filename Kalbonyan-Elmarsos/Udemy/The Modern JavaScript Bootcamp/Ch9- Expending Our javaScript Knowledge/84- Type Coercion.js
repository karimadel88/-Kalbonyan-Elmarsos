// Type Coerion - a string, a number, a boolean

console.log('5' + 5)    // 55
console.log('10' - 5)   // 5

console.log(5 === 5)    // true
console.log(5 == 5)     // true
console.log('5' == 5)   // true
console.log('5' === 5)  // false

console.log(typeof(123)) // number
console.log(typeof('123'))//string

const value = true + 2   // 3
console.log(value)      
const type = typeof value
console.log(type)        // number

