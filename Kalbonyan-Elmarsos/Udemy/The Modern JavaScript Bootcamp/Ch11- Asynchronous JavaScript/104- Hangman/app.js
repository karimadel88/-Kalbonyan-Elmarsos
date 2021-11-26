

const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#gusses')

const g1 = new Hangman('cat parts',2)
puzzleEl.textContent = g1.puzzel
guessEl.textContent = g1.statusMessage


window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    g1.makeGuess(guess)
    puzzleEl.textContent = g1.puzzel
    guessEl.textContent = g1.statusMessage
   
})

// Making request
const request = new XMLHttpRequest()
request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4){
        const data = JSON.parse(e.target.responseText)
        console.log(data)
    }
})
request.open('GET', 'https://puzzle.mead.io/puzzle')
request.send()