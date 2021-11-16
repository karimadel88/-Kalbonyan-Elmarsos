// Arrow function cant bind argunent but regular function do that as next example
const add = function(a,b){
    return arguments[0] + arguments[1]
}
const x = add(55,66,77)
console.log(x)

// Arrow function don't work with this keyword but regular work 
const car = {
    color : 'Red',
    getSummery : ()=>{return `the color of car is ${this.color}`}
}

console.log(car.getSummery())