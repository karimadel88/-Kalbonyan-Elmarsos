// const notes = ['Note 1', 'Note 2', 'Note 3']

// get item by index
// console.log(notes.indexOf('Note 1'))

// array of objects
const notes = [{}, {
    title: 'My next trip',
    body: 'I would like to go to italy'
},{
    title: 'read a book',
    body: 'I would like to read a novel'
},{
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}
]

console.log(notes.indexOf())

// {} != {}
// to solve that
let obj1 = {}
let obj2 = obj1
console.log(obj1 == obj2) // True

// find index method
const index = notes.findIndex(function (note, inde) {
    return note.title === 'Habbits to work on'
})

console.log(index)
