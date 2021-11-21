// Class
class Person {   
    // Create Constructor
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }

    // Methods
    getBio(){
        let bio = `${this.firstName} ${this.lastName} is ${this.age}`
        this.likes.forEach(like => {
            bio += `\n${this.firstName} likes ${like}`
        });
        return bio
    }

    setName(fullName){
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }    
}

const p1 = new Person('Shwaky','omar',22,['football','Reading'])
p1.setName('Karim Adel')
console.log(p1.getBio())            

const p2 = new Person('sameh','ahmed',23)
console.log(p2.getBio())
