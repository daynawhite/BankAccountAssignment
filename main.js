
let currentBalance = 0
let transactDate
let newCharge
let newDeposit
let newTransaction

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
        // console.log(currentBalance)
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

// Below is my method for checking to see if everything works as expected:

function addTransaction(acct, payee, amt) {
    if (amt > 0) {
        acct.deposit(amt);
    } else {acct.charge(payee, amt);
    }
}
let acct1 = new BankAccount(1234, "JD")
console.log(acct1)
addTransaction(acct1, 'paycheck', 1000)
addTransaction(acct1, "HEB", -200)
addTransaction(acct1, 'Amazon', -50)
console.log(acct1.transactions)
console.log(acct1.balance())
