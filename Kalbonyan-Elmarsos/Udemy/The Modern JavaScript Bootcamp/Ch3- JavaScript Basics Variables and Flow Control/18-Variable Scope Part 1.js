/**
 * Scope rules
 * Lexical Scope (Static Scope)
 * Global Scope -> Defined outside of all code blocks
 * Local Scope  -> Defined inside a code block
 */

let varOne = 'varOne' // Global

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'   // Scope inside if only (Local)
    console.log(varTwo)  // print varTwo
    if (true) {
        console.log(varTwo)
        let varFour = 'varFour'
    }
}

if (true) {
    let varFive = 'varFive'
}
// console.log(varTwo) // not print varTwo

// Local Scope
if (true) {
    let varThree = 'varThree'
}

