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

/**
 * find => return value
 * findIndex => return index
 */

const findNote = function(notes, noteTitle) {
    return notes.find(function(note, index){
        return note.title === noteTitle
    })
}
console.log(findNote(notes,'Habbits to work on'))



// const findNote = function(notes, noteTitle) {
//     const index = notes.findIndex(function(note){
//         return note.title === noteTitle
//     })
//     // return index // ==> 3
//     console.log(index)
//     return notes[index]
// }

// console.log(findNote(notes,'habbits to work on'))


// // console.log(notes.length)
// // console.log(notes)
// // // find index method
// // const index = notes.findIndex(function (note, index) {
// //     return note.title === 'read a book'
// // })

// console.log(index)
