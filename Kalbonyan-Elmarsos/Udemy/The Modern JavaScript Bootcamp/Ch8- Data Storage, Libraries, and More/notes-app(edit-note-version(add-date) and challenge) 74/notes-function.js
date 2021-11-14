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
const setNotes =function(key,item){
    localStorage.setItem('notes',JSON.stringify(notes))
}

// remove note after click at button
const removeNote = function (id) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id
    })

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate the Dom strucure for a note
const generateNoteDom = function (note) {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')

    // Setup the remove note button
    button.textContent = 'x'
    noteEl.appendChild(button)
    button.addEventListener('click',function(){
        // console.log(note)
        removeNote(note.id)
        setNotes(notes)
        renderNotes(notes,filters)
    })

    // Setup the note title text
    if(note.title.length > 0){
        textEl.textContent = note.title

    }else{
        textEl.textContent = 'unnamed'
    }
    textEl.setAttribute('href',`edit-note.html#${note.id}`)

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