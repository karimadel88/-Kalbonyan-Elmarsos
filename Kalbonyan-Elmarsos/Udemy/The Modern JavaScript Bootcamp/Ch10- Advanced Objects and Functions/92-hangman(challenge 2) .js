/**
 * 1. Setup the word instance property as an array of lower case latters
 * 2. Setup another instance property to store guessed letters
 * 3. Creat a method that gives you the word puzzle back
 * 
 */

const Hangman = function (word, remainingGuesses){
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.gussedLetters = ['c']
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

const g1 = new Hangman('cat',2)
console.log(g1.getPuzzel())

const g2 = new Hangman('jatr sf',4)
console.log(g2.getPuzzel())