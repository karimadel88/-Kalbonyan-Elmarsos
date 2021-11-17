/**
 * 1. Create a constructor function for the hangman game
 * 2. Setup two attribute. one for the word itself, another for the number of guesses allowed
 * 3. Create two instances of it and print both to the consol
 */

const Hangman = function (word, remainingGuesses){
    this.word = word
    this.remainingGuesses = remainingGuesses
}

const g1 = new Hangman('cat',21)
console.log(g1)

const g2 = new Hangman('jatr sf',4)
console.log(g2)