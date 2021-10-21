/*
    Create
     function to add income
     reset account
     get account summary
        # Account for andrew has 900$, $1000 in income and $100 in expenses.
*/
let myAccount =  {
    name : 'karim Adel',
    expenses : 0,
    income : 0
}

let addExpens = function (account, amount) {
    account.expenses = account.expenses + amount

}

let addIncome = function(account,amount){
    account.income += amount
}

let resetAccount = function(account){
    account.income = 0
    account.expenses = 0
}

let getAccountSummary = function(account){
    return `Account for ${account.name} has $${account.income - account.expenses}, $${account.income} in income and $${account.expenses} in expenses.`
}

addIncome(myAccount,1000)
addExpens(myAccount,100)
let summary = getAccountSummary(myAccount)
console.log(summary)
resetAccount(myAccount)
let summeryAfterRest = getAccountSummary(myAccount)
console.log(summeryAfterRest)