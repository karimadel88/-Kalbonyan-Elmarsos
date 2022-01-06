// // Basic function
// const add = function (a,b){
//     return a+b;
// }

// let addTest = add(5,6);
// console.log(addTest) // 11

// // Arrow funtion
// const add1 = (a,b) => a+b;
// let addTest1 = add1(5,6)
// console.log(addTest1) // 11


// Challenge
const fullName = "Karim Adel";
let firstName;
const getFirstName = (fn) => fullName.split(' ')[0];
firstName = getFirstName(fullName);
console.log(firstName); // Karim 
