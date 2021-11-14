/**
 * 1. Setup link href to inclde hash with id
 * 2. Setup the assign cell to inclde hash with id
 */

const notes = getSavedNotes()

const filters = {
    searchText: ''
}
    
document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4()
    notes.push({
        id:id,
        title:'',
        body:''
    })
    location.assign(`edit-note.html${id}`)
    setNotes('notes',notes)
})
    
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})
    
document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

