const account = {
    name : 'Karim Adel',
    expenses : [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance = 0

        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })

        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })

        accountBalance = totalIncome - totalExpenses

        return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }
}

/**
 * Expense -> description, amount
 * addExpense -> description, amount
 * getAccountSummery -> total up all expences -> Karim Adel has $1250 in expenses.
 */

account.addExpense('Rent',950)
account.addExpense('Coffe',2)
console.log(account.getAccountSummary())