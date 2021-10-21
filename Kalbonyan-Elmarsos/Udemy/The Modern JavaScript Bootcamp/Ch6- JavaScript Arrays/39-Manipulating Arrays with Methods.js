const notes = ['Note 1', 'Note 2', 'Note 3']

// add array last
notes.push('Note 4')
let x = notes.length
console.log(notes[x-1]) // Note 4
console.log(notes[x-2]) // Note 3

// remove item from last
notes.pop()
x = notes.length
console.log(notes[x-1]) // Note 3
console.log(notes[x-2]) // Note 2

// print Note 3 and remove it
console.log(notes.pop()) // print 3
console.log(notes)  // last is 2 not 3 As its removed

// reset notes
notes.push('Note 3')

// reomve from start
notes.shift()
console.log(notes)
console.log(notes[1])

// add start
notes.unshift('Note 1')
console.log(notes)

// add and remove from middle
notes.splice(1,1) // remove
console.log(notes)
notes.splice(1,0,'Note 2') // insert
notes.splice(1,0,'additional item in index 1') // insert
console.log(notes)

// add by index
notes[0] = 'update'
console.log(notes)


