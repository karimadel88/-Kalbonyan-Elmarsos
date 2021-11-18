// Primitive value : String, number, boolean, null, undefined

// Object : myObject --> Object.prototype --> null
// Array : myArray --> Array.prototype --> Object.prototype --> null
// Function : myFunction --> Function.prototype --> Object.prototype --> null
// String : myString --> String.prototype --> object.prototype --> null
// Number : myNumber --> Number.prototype --> object.prototype --> null
// Boolean : myNumber --> Boolean.prototype --> object.prototype --> null




// const team = ['p1','p2']

// const team = new Array(['p1','p2'])
// console.log(team)

// const getScore = () => 1
// console.log(getScore)

const product = 'Computer'      // This is a value
console.log(product)
const p2 = product.split('')    // Convert to array
console.log(p2)

const otherProduct = new String('phone')
console.log(otherProduct)