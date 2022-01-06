class Person {
    constructor(name, age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting (){
        return `Hi ${this.name} How are you`;
    }
    
    getSummery(){
        return `My Name is ${this.name} and my age is ${this.age}`;
    }
}

class Student extends Person {
    constructor(name,age,major){;
        super(name,age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major // !!'' ==> true false ==> false;
    }

    getSummery(){
        let summery = super.getSummery();
        if(this.hasMajor){
            summery += ` major is ${this.major}`;
        }
        return summery;
    }
}

class Traveller extends Person {
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    
    getGreeting(){
        let greeting =super.getGreeting();
        if(!!this.homeLocation){
            greeting += `i am from ${this.homeLocation} `
        }
        return greeting;
    }
}

const p1 = new Person('karim',15);
console.log(p1.getSummery());

const s1 = new Student('karim',21,'CS');
console.log(s1.getSummery());

const t1 = new Traveller('ahmed',15,'london')
console.log(t1.getGreeting());
// Challenge