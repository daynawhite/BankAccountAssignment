
let currentBalance = 0
let transactDate
let newCharge
let newDeposit

class BankAccount {
    constructor (accountNumber, owner) {
        this.accountNumber = accountNumber
        this.owner = owner
        this.transactions = []
    }
    
    balance() {
        // compute balance by adding up amounts in transaction array
        currentBalance = this.transactions.reduce(getSum)
        function getSum(total, value) {
            return total + value;
        }
        console.log(currentBalance)
        return currentBalance
    }
    deposit(depAmt) {
        // creates a new transaction representing the deposit, and adds it to the transactions array
        newDeposit = new Transaction(depAmt)
        this.transactions.push(depAmt)
    }
    charge(payee, amt) {
        // creates a new transaction with payee and amt;
        newCharge = new Transaction(amt, payee)
        // adds the new transaction to the transaction array
        this.transactions.push(amt)
    }
}
class Transaction {
    constructor (amount, payee) {
        this.amount = amount
        this.payee = payee
        this.transactDate = new Date()
    }
}
// const trans1 = new Transaction(1000, 'paycheck')
// const trans2 = new Transaction(-200, 'HEB')
// const trans3 = new Transaction(-50, 'Amazon')