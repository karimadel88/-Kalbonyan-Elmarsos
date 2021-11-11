// console.log(uuidv4())
// Read exicting notes from localStorage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if(notesJSON !== null){
        return JSON.parse(notesJSON)
    }else {
        return []
    }
}

// Saved notes to storage
const sitNotes =function(key,item){
    localStorage.setItem('notes',JSON.stringify(notes))
}


// Generate the Dom strucure for a note
const generateNoteDom = function (note) {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('span')
    const button = document.createElement('button')

    // Setup the remove note button
    button.textContent = 'x  '
    noteEl.appendChild(button)

    // Setup the note title text
    if(note.title.length > 0){
        textEl.textContent = note.title

    }else{
        textEl.textContent = 'unnamed'
    }

    noteEl.appendChild(textEl)
    return noteEl
}

// Render application notes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    document.querySelector('#notes').innerHTML = ''
    
    filteredNotes.forEach(function (note) {
        const noteEl = generateNoteDom(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}