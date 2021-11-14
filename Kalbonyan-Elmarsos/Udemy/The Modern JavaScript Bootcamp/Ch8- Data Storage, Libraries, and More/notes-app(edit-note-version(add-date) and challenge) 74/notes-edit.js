/**
 * Challenge
 * 1. Create two dates in the past (use string for date)
 * 2. Get timestemp for both 
 * 3. Figure out which is first and print its time
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

window.addEventListener('storage',function(e){
    if (e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        note = notes.find(function(note){
            return note.id === noteId
        })
        if(note === undefined)location.assign('index.html')
        else {
            titleEl.value = note.title
            bodyEl.value = note.body
        }
    }
})

const now = new Date()
const timestamp = now.getTime()

const myDate = new Date(timestamp);
console.log(myDate.getFullYear)

// Unix Epoch - january 1st 2000 00:00:00
// const now = new Date()
// console.log(now.toString)
// console.log(`Year is ${now.getFullYear()}`)
// console.log(`Month is ${now.getMonth()}`)
// console.log(`Hours : ${now.getHours()}`)
// console.log(`Minutes : ${now.getMinutes()}`)
// console.log(`Seconds : ${now.getSeconds()}`)