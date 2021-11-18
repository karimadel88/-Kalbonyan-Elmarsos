/**
 * 1. Setup new 'status' property with initial value of playing
 * 2. Create method for recalculating status to 'playing','finished' or 'failed'
 * 3. Call that method after a guess is processed
 * 4. Use console to print status
 */

const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#gusses')

const g1 = new Hangman('cat',2)
puzzleEl.textContent = g1.getPuzzel()
guessEl.textContent = g1.remainingGuesses
console.log(g1.status)


window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    g1.makeGuess(guess)
    puzzleEl.textContent = g1.getPuzzel()
    guessEl.textContent = g1.remainingGuesses 
    console.log(g1.status)
   
})