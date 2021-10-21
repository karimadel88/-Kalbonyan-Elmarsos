/**
 * create random number from 1 - 5 - true if correct - false if not correct
 */

let makeGuess = function (guess) {
    let min = 1, max = 5
    let randomNum = Math.floor(Math.random() * (max - min)) + min
    return guess == randomNum
}

let chk = makeGuess(1)
console.log(chk)

