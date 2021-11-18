/**
 * 1. Setup new 'status' property with initial value of playing
 * 2. Create method for recalculating status to 'playing','finished' or 'failed'
 * 3. Call that method after a guess is processed
 * 4. Use console to print status
 */

const Hangman = function (word, remainingGuesses){
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.gussedLetters = []
    this.status = 'Playing'
}

// Function for recalculating status
Hangman.prototype.recalculatingStatus = function () {
    const finished = this.word.every((letter)=>{
        return this.gussedLetters.includes(letter)
    })
    
    // const letterUnGussed = this.word.filter((letter) => {
    //     return !this.gussedLetters.includes(letter)
    // })

    // const finshed = this.letterUnGussed.length === 0
    // let finshed = true
    // this.word.forEach((letter) =>{
    //     if(this.gussedLetters.includes(letter))
    //         finshed = true
    //     else
    //         finshed = false
    // })

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

