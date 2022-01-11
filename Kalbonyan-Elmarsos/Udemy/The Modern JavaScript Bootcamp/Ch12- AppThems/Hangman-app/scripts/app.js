// Dom puzzle and gusses elements
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')

// opject from hangman game
let game1

// add event when write from keyboard
window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

// render Your App
const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.statusMessage
    // To put everey letter in span and styles it at alone
    game1.puzzle.split('').forEach((letter) => {
        const letEl = document.createElement('span');
        letEl.textContent = letter;
        puzzleEl.appendChild(letEl); 
    });
}

// Function to start game and bind with button
const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

// Main Dom to Start App
document.querySelector('#reset').addEventListener('click', startGame)

startGame()
