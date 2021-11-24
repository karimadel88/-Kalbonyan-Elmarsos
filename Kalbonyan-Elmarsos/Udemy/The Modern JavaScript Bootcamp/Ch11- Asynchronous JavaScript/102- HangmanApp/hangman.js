class Hangman{
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.gussedLetters = []
        this.status = 'playing'
    }

    // Methods
    recalculatingStatus () {
        // All letter in word must be in gussed
        const finished = this.word.every((letter)=>{
            return (this.gussedLetters.includes(letter) || letter === ' ')
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

    get statusMessage () {
        if(this.status === 'playing'){
            return `Gusses left: ${this.remainingGuesses}`
        }else if (this.status === 'Failed') {
            return `Nice try! the word was "${this.word.join('')}"`
        }else{
            return 'Well Done!'
        }
    }

    get puzzel (){
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

    makeGuess (guess){
        const isUnique = this.gussedLetters.includes(guess)
        const isBadGuess = this.word.includes(guess)
    
        if (this.status  !== 'playing'){
            return
        }
    
        if(!isUnique)
            this.gussedLetters.push(guess)
        
        if(!isUnique && !isBadGuess)
            this.remainingGuesses --
    
        this.recalculatingStatus()
    }
        
}
