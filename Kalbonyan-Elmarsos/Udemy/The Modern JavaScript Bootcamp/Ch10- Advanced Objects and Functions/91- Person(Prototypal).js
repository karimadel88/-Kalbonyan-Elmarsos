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

Person.prototype.location = 'Cairo'     // add this to constructor and its object 

const p2 = new Person('Shwaky','omar',22,['football','Reading'])
p2.setName('Karim Adel')
console.log(p2.getBio())                // Karim Adel is 22

const p3 = new Person('sameh','ahmed',23)
console.log(p3.getBio())
console.log(p2.location)