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

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        // return true  // All notes array
        // return false // [] nothing
        const isTitleMatch = note.title.includes(query)
        const isBodyMatch = note.body.includes(query)
        return (isTitleMatch || isBodyMatch)
    }
    )
    

}



console.log(findNotes(notes,'ne'))


