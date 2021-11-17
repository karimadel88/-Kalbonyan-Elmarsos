// Product --> Object.prototype --> null

// const product = {
//     name : 'Influence'
// }

// Other way to define object
const product = new Object()
product.name = 'Influence'

// Third wat
const product = new Object({
    name : 'Influence'
})

// Can override method of prototype
Object.prototype.hasOwnProperty = () => 'This is new function'

// hasOwnProperty return true or false
console.log(product.hasOwnProperty('name')) // true