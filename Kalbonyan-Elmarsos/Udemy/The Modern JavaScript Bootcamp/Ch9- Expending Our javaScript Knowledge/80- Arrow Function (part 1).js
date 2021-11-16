// Square function by arrwo function syntax
const square = (num) => { return num*num }
console.log(square(5)) // 25

// Filter object at people age under 30 year
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

const under30 = people.filter((person) => {return person.age < 30})
console.log(under30)
