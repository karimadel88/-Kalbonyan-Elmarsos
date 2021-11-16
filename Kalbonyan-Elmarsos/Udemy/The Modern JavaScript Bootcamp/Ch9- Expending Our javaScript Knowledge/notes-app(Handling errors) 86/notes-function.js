// console.log(uuidv4())
// Read exicting notes from localStorage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')
    try{
        return (notesJSON) ?  (JSON.parse(notesJSON)) : []
    }catch(e){
        return []
    }
}

// Saved notes to storage
const setNotes =(key,item) => {
    localStorage.setItem('notes',JSON.stringify(notes))
}

// remove note after click at button
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => {
        return note.id === id
    })

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate the Dom strucure for a note
const generateNoteDom = (note) => {
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

// Sort your notes by one of three ways
const sortNotes = (notes, sortBy) =>{
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'alphabetical') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes
    }
}

// Render application notes
const renderNotes = (notes, filters) => {
    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    document.querySelector('#notes').innerHTML = ''
    
    filteredNotes.forEach((note) => {
        const noteEl = generateNoteDom(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}

// Generete
const generateLastEdited =  (timestamp) => {
    return `Last edited ${moment(timestamp).fromNow()}`
}