// console.log(`Hello, my name 'is' "karim"`)

let name = 'karim'
let age = 21
console.log(`Hey, my name is ${name}! and I am ${age} years old.`)

let getScoreText = function (name = 'karim', score = 1) {
    return `Name : ${name} and his Score is : ${score}`
}
let pri = getScoreText()
console.log(pri)