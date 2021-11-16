const products = []
const product = products[0]

if(product !== undefined) console.log('Product Found')
else console.log('Product not found')

// Truthy - Values that resolve to true in boolean context
// Falsy - Values that resolve to false in boolean context
// Falsy values ==> false, 0, empty string ,null ,undefined, NaN


if(0)
     console.log('false')
else
    console.log('true')

console.log(1/0) // infinity ==> NAN consider as falsy value
