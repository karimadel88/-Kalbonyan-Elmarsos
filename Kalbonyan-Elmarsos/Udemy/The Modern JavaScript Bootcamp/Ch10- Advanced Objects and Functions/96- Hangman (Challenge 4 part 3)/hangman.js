/**
 * 1. Display yhe puzzle to the browser instead of the console
 * 2. Displat the gusses ledt to the browser instead of console
 * 3. Seprate the hangman definition from the rest of the app code
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

