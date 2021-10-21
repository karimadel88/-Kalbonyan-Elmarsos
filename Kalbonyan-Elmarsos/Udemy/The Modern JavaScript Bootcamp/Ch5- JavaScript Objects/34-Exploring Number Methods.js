
let num = 103.941555

// Fixed method
num = num.toFixed(1)
console.log(num)

/* Math */
console.log(Math.abs(-1)) // 1
console.log(Math.floor(1.2)) //1
console.log(Math.ceil(1.2))
console.log(Math.round(1.4))

// math random
console.log(Math.random()) //0 to 1
console.log(Math.floor(Math.random()*10)) // 0 to 10 randomly
let max = 20,min=10
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min // range from 10 to 20
console.log(randomNumber)


