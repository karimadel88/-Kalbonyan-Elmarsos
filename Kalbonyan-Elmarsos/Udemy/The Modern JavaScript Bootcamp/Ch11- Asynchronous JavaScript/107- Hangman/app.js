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

getPuzzle("2", (error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
})

getCountry('MX', (error, country) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`Country name: ${country.name}`)
    }
})

// console.log(puzzle);

// const request = new XMLHttpRequest();
// request.open('GET','https://puzzle.mead.io/puzzle?5');
// request.send();

// request.addEventListener('readystatechange',(e)=>{
//     if(e.target.readyState === 4 && e.target.status === 200){
//         let data = JSON.parse(e.target.responseText)
//         console.log(data.puzzle);
//         // console.log(e.target.status)
//     }
//     else{
//         console.log('error')
//     }
//     // console.log(e.target.status);
// })