const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Car Parts', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
})

// Making http request
const request = new XMLHttpRequest();
request.open('GET','https://puzzle.mead.io/puzzle');
request.send();

request.addEventListener('readystatechange',(e)=>{
    if(e.target.readyState === 4){
        let data = JSON.parse(e.target.responseText)

        console.log(data.puzzle);
    }
})