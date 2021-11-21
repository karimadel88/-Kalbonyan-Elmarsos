// Class
/**
 * 1. Create class for students
 * 2. Traking student grade 0 - 100
 * 3. Override bio to print passing or failing messege. 70 and abovr "Andrew is passing exam"
 * 4. Create updateGrade that takes the amount to add or remove from the grade
 */
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

// This class inharite from person class
class Employee extends Person {
    constructor(firstName, lastName, age, likes = [],position) {
        super(firstName,lastName,age,likes)
        this.position = position
    }
    
    getBio(){
        return `${this.firstName} is a ${this.position}`
    }

    getYearsLeft(){
        return 65 - this.age
    }
}

// This class inharite from person class
class Student extends Person{
    constructor(firstName,lastName,age,likes,grade){
        super(firstName,lastName,age,likes)
        this.grade = grade
    }

    updateGrade(additinalGrade){
        this.grade += additinalGrade
    }

    getBio(){
        const status = this.grade >= 70 ? 'Passing':'Failing'
        return `${this.firstName} is ${status}`
    }
}
const me = new Student('Karim', 'Adel', 22, 88, [])
console.log(me.getBio)

// const p1 = new Employee('Shwaky','omar',22,['football','Reading'],'Engineer')
// console.log(p1.getBio())
// console.log(p1.getYearsLeft())

