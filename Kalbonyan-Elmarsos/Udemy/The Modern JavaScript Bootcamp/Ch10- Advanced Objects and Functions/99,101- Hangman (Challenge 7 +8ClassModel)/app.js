

const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#gusses')

const g1 = new Hangman('cat',2)
puzzleEl.textContent = g1.puzzel
guessEl.textContent = g1.statusMessage


window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    g1.makeGuess(guess)
    puzzleEl.textContent = g1.puzzel
    guessEl.textContent = g1.statusMessage
   
})