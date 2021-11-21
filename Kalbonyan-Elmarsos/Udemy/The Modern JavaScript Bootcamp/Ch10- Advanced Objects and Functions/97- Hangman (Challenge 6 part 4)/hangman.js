/**
 * 1. Disable new guesses unless 'olaying'
 * 2. Setup a new method to get back a status message
 *  
 */

const Hangman = function (word, remainingGuesses){
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.gussedLetters = []
    this.status = 'playing'
}

// Function for recalculating status
Hangman.prototype.recalculatingStatus = function () {
    const finished = this.word.every((letter)=>{
        return this.gussedLetters.includes(letter)
    })

    if (this.remainingGuesses === 0){
        this.status = 'Failed'
    }
    else if(finished){
        this.status = 'Finished'
    }
    else{
        this.status = 'playing'
    }
}

Hangman.prototype.getStatusMessage = function () {
    if(this.status === 'playing'){
        return `Gusses left: ${this.remainingGuesses}`
    }else if (this.status === 'Failed') {
        return `Nice try! the word was "${this.word.join('')}"`
    }else{
        return 'Well Done!'
    }
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

    if (this.status  !== 'playing'){
        return
    }

    if(!isUnique)
        this.gussedLetters.push(guess)
    
    if(!isUnique && isBadGuess)
        this.remainingGuesses --

    this.recalculatingStatus()
}

