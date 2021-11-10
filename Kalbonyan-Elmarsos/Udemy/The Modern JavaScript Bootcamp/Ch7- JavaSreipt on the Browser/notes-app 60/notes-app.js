
const notes = [{
        title: 'My next trip 1',
        body: 'I would like to go to italy'
    },{
        title: 'read a book',
        body: 'I would like to read a novel'
    },{
        title: 'Habbits to work on',
        body: 'Exercise. Eating a bit better'
    }
    ]

    const filters = {
        searchText: ''
    }

    const renderNotes = function (notes,filters){
        const filteredNotes = notes.filter(function(note){
            return note.title.includes(filters.searchText)
        })

        document.querySelector('#notes').innerHTML = '<p>TEST..</p>'
        filteredNotes.forEach(function(note){
            const noteEl = document.createElement('p')
            noteEl.textContent = note.title
            document.querySelector('#notes').appendChild(noteEl)
            
        });
        
        
    }

    document.querySelector('#search-text').addEventListener('input',function(e){
        const fNo = e.target.value
        filters.searchText = fNo
        
        renderNotes(notes,filters)
    })

    document.querySelector('#create-note').addEventListener('click',function(event){
        console.log('Did this work?')
        event.target.textContent ='the button was clicked' // from structure of event
    })

    document.querySelector("#form-name").addEventListener('submit', function(e){
        e.preventDefault()
        console.log(e.target.elements.firstName.value)

    })

    document.querySelector('#for-fun').addEventListener('change', function (e) {
        console.log(e.target.checked)
    })
// document.querySelector('#remove-all').addEventListener('click',function(){
//     console.log('Delete all notes')
//     document.querySelectorAll('.note').forEach(function(note){
//         note.remove()
//     })
// })

// document.querySelectorAll('button')[1].addEventListener('click',function(){
//     console.log('Delete all notes')
// })