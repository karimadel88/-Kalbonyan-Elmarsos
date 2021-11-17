// Prototypal inheritance

const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function(){
    let bio = `${this.firstName} ${this.lastName} is ${this.age}`
    this.likes.forEach(like => {
        bio += `\n${this.firstName} likes ${like}`
    });
    return bio
}

Person.prototype.setName = function(fullName){
    const names = fullName.split(' ') // Can use split with space in argument to store first name and full name in array
    this.firstName = names[0]
    this.lastName = names[1]
}

const p2 = new Person('Shwaky','omar',22,['football','Reading'])

// same instance not other
p2.getBio = function () {
    return 'testing'
}

p2.setName('Karim Adel')
console.log(p2.getBio())                // Karim Adel is 22

const p3 = new Person('sameh','ahmed',23)

// Person.prototype.getBio = function (){
//     return 'Testing'
// }
console.log(p3.getBio())
