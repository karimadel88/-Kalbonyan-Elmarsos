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

    set fullName(fullName){
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }  
    
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

// This class inharite from person class
class Employee extends Person {
    constructor(firstName, lastName, age, likes = [],position) {
        super(firstName,lastName,age,likes)
        this.position = position
    }
    
    getBio(){
        return `${this.fullName} is a ${this.position}`
    }

    getYearsLeft(){
        return 65 - this.age
    }
}

const p1 = new Employee('Shwaky','omar',22,['football','Reading'],'Engineer')
p1.fullName = 'Karim Adel'
console.log(p1.getBio())
console.log(p1.getYearsLeft())

