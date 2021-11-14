
/**
 * 1. Add createdAt and updatedAt to the new notes (store timestamp)
 * 2. Update updatedAt when someone edits a title or body
 * 3. Delete all old notes before testing
 */

// Store note
let notes = getSavedNotes()

const filters = {
    searchText: ''
}
    
document.querySelector('#create-note').addEventListener('click', function (e) {
    // const id = uuidv4()
    // const now = new Date();
    // const timestamp = now.getTime()x

    notes.push({
        id:id,
        title:'',
        body:'',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    setNotes('notes',notes)
    location.assign(`edit-note.html#${id}`)
   
})
    
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})
    
document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})
