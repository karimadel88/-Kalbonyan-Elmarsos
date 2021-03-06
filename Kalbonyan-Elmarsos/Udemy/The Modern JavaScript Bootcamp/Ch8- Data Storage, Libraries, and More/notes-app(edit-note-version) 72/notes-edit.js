/**
 * 1. Setup input event for title
 * 2. Update note object and save note list
 * 3. Repeat steps 1-2 for body
 * 4. Setup a remove button that remotes notes and sends user back to home page
 * 
 */
const titleEl = document.querySelector('#note-title')
const bodyEl = document.querySelector('#note-body')
const removeEl = document.querySelector('#remove-note')

const noteId = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find(function(note){
    return note.id === noteId
})

if(note === undefined){
    location.assign('index.html')
}

titleEl.value = note.title
bodyEl.value = note.body

titleEl.addEventListener('input',function(e){
    note.title = e.target.value
    setNotes(notes)
})

bodyEl.addEventListener('input',function(e){
    note.body = e.target.value
    setNotes(notes)
})

removeEl.addEventListener('click',function(){
    removeNote(note.id)
    setNotes(notes)
    location.assign('index.html')
})