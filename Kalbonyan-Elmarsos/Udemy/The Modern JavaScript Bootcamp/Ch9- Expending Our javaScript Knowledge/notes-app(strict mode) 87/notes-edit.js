'use strict'
const titleEl = document.querySelector('#note-title')
const bodyEl = document.querySelector('#note-body')
const removeEl = document.querySelector('#remove-note')
// const dateElement = document.querySelector('#last-edited')
const noteId = location.hash.substring(1)

const notes = getSavedNotes()
const note = notes.find((note) =>{
    return note.id === noteId
})

if(!note){
    location.assign('index.html')
}

titleEl.value = note.title
bodyEl.value = note.body
// dateElement.textContent = generateLastEdited(note.updatedAt)

titleEl.addEventListener('input',(e)=>{
    note.title = e.target.value
    // note.updatedAt = moment().valueOf()
    // dateElement.textContent = generateLastEdited(note.updatedAt)
    setNotes(notes)
})

bodyEl.addEventListener('input',(e) => {
    note.body = e.target.value
    // note.updatedAt = moment().valueOf()
    // dateElement.textContent = generateLastEdited(note.updatedAt)
    setNotes(notes)
})

removeEl.addEventListener('click',() =>{
    removeNote(note.id)
    setNotes(notes)
    location.assign('index.html')
})

window.addEventListener('storage',(e) =>{
    if (e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        note = notes.find((note) => {
            return note.id === noteId
        })
        if(!note)location.assign('index.html')
        
        titleEl.value = note.title
        bodyEl.value = note.body
        // dateElement.textContent = generateLastEdited(note.updatedAt)
    }
})