/**
 * 1. Find the person whith age 21
 * 2. print that person name
 */

 const people = [
    {
        name: 'karim',
        age: 22
    },{
        name : 'khamis',
        age : 35
    },{
        name : 'Ahmed',
        age : 17
    }
]

// 1. Find the person
const get22 = people.find((person)=> {return person.age === 22 })

// 2. Print that person name
console.log(get22.name)