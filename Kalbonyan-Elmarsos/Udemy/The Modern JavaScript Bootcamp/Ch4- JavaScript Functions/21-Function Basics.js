/**
 * Created by - Karim Adel
 * Date - 6/10/2021 at 12:15 PM 
 */

/**
 * Function - input (arguments), code, output (return value)
 */

let greetUser = function (/*Input*/) {
    // Run Code ...
    console.log('Welcome, user!')
}

/* To execute code we need to call function */
greetUser()

let square = function (num) {
    console.log(num*num)
}

square(3) // print 3 * 3 = 9
square(4) // print 4 * 4 = 16

let square2 = function (num) {
    let result = num * num
    return result
}
let value = square2 (4)
console.log(value)
console.log(square2(2)) // print 2 * 2 and function output is value of function == result