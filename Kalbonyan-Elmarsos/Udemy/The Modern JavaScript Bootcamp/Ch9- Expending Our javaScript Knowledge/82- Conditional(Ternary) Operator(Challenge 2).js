/**
 * 1. Print "Team size : 3, if less than or equal ton 4"
 * 2. Print "Two many people on your team" otherwise
 */
const team = ['Tyler','Porte']

const message = team.length() <= 3 ? `Team size : ${team.length}` : `Too many people on your team"`
console.log(message)