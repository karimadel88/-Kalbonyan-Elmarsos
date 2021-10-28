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

document.querySelector('button').addEventListener('click',function(event){
    console.log('Did this work?')

    event.target.textContent ='the button was clicked' // from structure of enent

    notes.forEach(function(note){
        const nh = document.createElement('h2')
        const np = document.createElement('p')
        nh.textContent = note.title
        np.textContent = note.body
        document.querySelector('body').appendChild(nh)
        document.querySelector('body').appendChild(np)

    })
})
