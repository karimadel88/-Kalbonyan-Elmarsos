
const notes = ['Note 1', 'Note 2', 'Note 3']

// Counting... 1
// increasing
for (let count = 1; count <= 3; count++){
    console.log(`Counting... ${count}`)
}

// decreasing
for(let count = 3; count>=0;count--) {
    console.log(count)
}

// notes array
for (let count = 0; count < notes.length; count++) {
    console.log(notes[count])
}

for (let count = notes.length - 1; count >= 0; count--) {
    console.log(notes[count])
}