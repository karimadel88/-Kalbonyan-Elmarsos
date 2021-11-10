const notes = [{
    title: 'My next trip',
    body: 'I would like to go to italy'
},{
    title: 'read a book',
    body: 'I would like to read a novel'
},{
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}
]
console.log('fff')

document.querySelector('#create-note').addEventListener('click',function(event){
    console.log('Did this work?')
    event.target.textContent ='the button was clicked' // from structure of event
})

document.querySelector('#remove-all').addEventListener('click',function(){
    console.log('Delete all notes')
    document.querySelectorAll('.note').forEach(function(note){
        note.remove()
    })
})

document.querySelector('#search-text').addEventListener('input ',function(e){
    console.log(e)
})



// document.querySelectorAll('button')[1].addEventListener('click',function(){
//     console.log('Delete all notes')
// })