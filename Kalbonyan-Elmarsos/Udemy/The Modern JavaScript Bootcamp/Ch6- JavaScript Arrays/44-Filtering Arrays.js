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

const findNote = function(notes, noteTitle) {
    return notes.find(function(note, index){
        return note.title === noteTitle
    })
}

const filteredNotes = notes.filter(function (note, index) {
    // return true  // All notes array
    // return false // [] nothing
    const isTitleMatch = note.title.toLowerCase().includes('ne')
    const isBodyMatch = note.body.toLowerCase().includes('ne')
    return (isTitleMatch || isBodyMatch)
}
)

console.log(filteredNotes)


console.log(findNote(notes,'Habbits to work on'))


