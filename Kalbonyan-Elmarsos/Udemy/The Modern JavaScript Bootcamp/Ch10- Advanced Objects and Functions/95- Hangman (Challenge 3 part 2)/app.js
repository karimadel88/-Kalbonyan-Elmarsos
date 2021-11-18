/**
 * 1. Create a method for making a guess
 * 1. Should accept a character for making a guess
 * 2. Should add unique guesses to list of guesses
 * 3. Should decrement the guesses left if a unique guess isn't match
 */


const Hangman = function (word, remainingGuesses){
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.gussedLetters = []
}

Hangman.prototype.getPuzzel = function(){
    let puzzle = ''
    this.word.forEach(letter => {
        if (this.gussedLetters.includes(letter) || letter ===' '){
            puzzle += letter
        }else{
            puzzle += '*'
        }
    });
    return puzzle
}

// Function to take guess
Hangman.prototype.makeGuess = function (guess){
    const isUnique = this.gussedLetters.includes(guess)
    const isBadGuess = this.word.includes(guess)

    if(!isUnique)
        this.gussedLetters.push(guess)
    
    if(!isUnique && isBadGuess)
        this.remainingGuesses --
}

const g1 = new Hangman('cat',2)

// Guess c, t,z
// g1.makeGuess('c')
// g1.makeGuess('t')
// g1.makeGuess('z')
// print remaining guesses
console.log(g1.getPuzzel())
console.log(g1.remainingGuesses)

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    g1.makeGuess(guess)
    console.log(g1.getPuzzel())
    console.log(g1.remainingGuesses)
    

})