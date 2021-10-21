// array of objects
const notes = [{}, {
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

console.log('a' < 'b') // true

const sortNotes = function (notes) {
    notes.sort(
        function(a,b){
            if(a.title.toLowerCase() < b.title.toLowerCase()){
                return -1
            }else if(b.title.toLowerCase < a.title.toLowerCase){
                return 1
            }else {
                return 0
            }
        }
    )
} 
sortNotes(notes)
console.log(notes)

// const findNotes = function (notes, query) {
//     return notes.filter(function (note, index) {
//         // return true  // All notes array
//         // return false // [] nothing
//         const isTitleMatch = note.title.includes(query)
//         const isBodyMatch = note.body.includes(query)
//         return (isTitleMatch || isBodyMatch)
//     }
//     )
    

// }

// console.log(findNotes(notes,'ne'))