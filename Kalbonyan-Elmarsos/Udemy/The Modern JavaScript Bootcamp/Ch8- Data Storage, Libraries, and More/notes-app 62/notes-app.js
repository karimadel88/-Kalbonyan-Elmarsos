
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

    // // To Create
    // // localStorage.setItem('location','philadelphi')

    // // To Read
    // console.log(localStorage.getItem('location'))

    // // To Delete at key
    // localStorage.removeItem('location')

    // // To remove all
    // localStorage.clear()
    

    // const user = {
    //     name : 'karim',
    //     age : '20'
    // }

    // const userJSON = JSON.stringify(user)
    // console.log(userJSON) 

    // firstUser = localStorage.setItem('user1',userJSON)
    // console.log(localStorage.getItem('user1'))

    const userJSON = localStorage.getItem('user1')
    const user = JSON.parse(userJSON)
    console.log(`${user.name} is ${user.age}`)

    // const renderNotes = function (notes, filters) {
    //     const filteredNotes = notes.filter(function (note) {
    //         return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    //     })
    
    //     document.querySelector('#notes').innerHTML = ''
        
    //     filteredNotes.forEach(function (note) {
    //         const noteEl = document.createElement('p')
    //         noteEl.textContent = note.title
    //         document.querySelector('#notes').appendChild(noteEl)
    //     })
    // }
    
    // renderNotes(notes, filters)
    
    // document.querySelector('#create-note').addEventListener('click', function (e) {
    //     e.target.textContent = 'The button was clicked'
    // })
    
    // document.querySelector('#search-text').addEventListener('input', function (e) {
    //     filters.searchText = e.target.value
    //     renderNotes(notes, filters)
    // })
    
    // document.querySelector('#filter-by').addEventListener('change', function (e) {
    //     console.log(e.target.value)
    // })