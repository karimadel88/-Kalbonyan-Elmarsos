// Multiple argument

let add = function (num1, num2, num3){
    return num1 + num2 + num3
}

let result = add (5,10)
console.log(result)

// Defualt arguments
let getScoreTest = function (name ='Karim', score=89) {
    console.log(name)
    console.log(score)
}

let getScoreTest2 = function (name ='Karim', score=16) {
    return `Name : ${name} and his Score is : ${score}`
}

getScoreTest()
getScoreTest('eid', 100)

let pri = getScoreTest2(undefined,55)
console.log(pri)