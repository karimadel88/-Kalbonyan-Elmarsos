
let myAccount =  {
    name : 'karim Adel',
    expenses : 0,
    income : 0
}

let otherAccount = myAccount // point to same object

let addExpens = function (account, amount) {
    account.expenses = account.expenses + amount
    console.log(account)
}

// let addExpens = function (account, amount) {
//     account = {}
//     console.log(account)
// }

// After modify
addExpens(myAccount, 55)
// Before
console.log(myAccount)
// We note are same that because cant used clone but use same objects

console.log(otherAccount)