/**
 * Person object have name, age and location
 * print in template string 
 * increse agey by 1 year
 */

let Person = {
    name: 'Karim',
    age: 21,
    location:'cairo'
}

console.log(`${Person.name} is ${Person.age} in ${Person.location}`)

Person.age+=1
console.log(`${Person.name} is ${Person.age} in ${Person.location}`)