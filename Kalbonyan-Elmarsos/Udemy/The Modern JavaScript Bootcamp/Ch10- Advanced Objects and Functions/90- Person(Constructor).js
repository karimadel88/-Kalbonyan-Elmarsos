
const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}
// const me = person()
// console.log(me)  //undefined

// const me2 = new person()
// console.log(me2)  //person {} => return person as object

const p = new Person()     
console.log(p)             //person { firstName: undefined }

const p2 = new Person('Shwaky','omar',22)
console.log(p2)            //person { firstName: 'Shwaky' }

const p3 = new Person('sameh','ahmed',23)
console.log(p3)