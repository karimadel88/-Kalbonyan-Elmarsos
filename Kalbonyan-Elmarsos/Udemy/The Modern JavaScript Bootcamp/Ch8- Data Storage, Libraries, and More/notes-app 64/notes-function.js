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
    const noteEl = document.createElement('p')

    if(note.title.length > 0){
        noteEl.textContent = note.title

    }else{
        noteEl.textContent = 'unnamed'
    }
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