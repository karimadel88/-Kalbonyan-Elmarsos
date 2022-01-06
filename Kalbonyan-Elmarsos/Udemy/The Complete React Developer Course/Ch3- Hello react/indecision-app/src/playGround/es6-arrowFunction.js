// argument objcet - no longer bound with arrow functions
const square = function (a,b) {
    console.log(arguments) // Cant run in es6 with arrow function
}
square();

// this keyword - no longer bound
// const user = {
//     name : 'Karim',
//     cities : ['cairo','Fyoum','Assuit'],
//     getSummery : function(){
//         let that = this.name;
//         console.log(`name is ${this.name} cities is ${this.cities}`)
//         this.cities.forEach(function(city){
//             console.log(/*this.name*/ that + ' City is ' + city) // here get undifiend but we can get variable to over come
//         })
//     }
// }


// To solve this keword we can use arrow funtion
const user = {
    name : 'Karim',
    cities : ['cairo','Fyoum','Assuit'],
    getSummery () {
        const cityMessages = this.cities.map((city) => city);
        return cityMessages.map((city) => `${this.name} lives in ${city}`);
    //     console.log(`name is ${this.name} cities is ${this.cities}`)
    //     this.cities.forEach((city) => {console.log(this.name + ' City is ' + city); // here get undifiend but we can get variable to over come
    // })
    }
}
let cities1 = user.getSummery();
cities1.map((city) => console.log(city))
console.log(cities1)

// Challenge
const multiplier = {
    numbers : [1,2,5,6,7,4],
    multiplyBy : 2,
    multiply() {
        return this.numbers.map((number) =>  number*this.multiplyBy); 
    }
}
console.log(multiplier.multiply())