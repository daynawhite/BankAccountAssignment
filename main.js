
let currentBalance = 0

class BankAccount {
    constructor (accountNumber, owner) {
        this.accountNumber = accountNumber
        this.owner = owner
        this.transactions = []
    }
    
    balance() {
        // compute balance by adding up amounts in transaction array
        // currentBalance = 
        return currentBalance
    }
    deposit(depAmt) {
        // creates a new transaction representing the deposit, and adds it to the transactions array
        
    }
    charge(payee, amt) {
        // creates a new transaction with payee and amt;
        
        // adds the new transaction to the transaction array
    }
}

class Transaction {
    constructor (amount, payee) {
        this.amount = amount
        this.payee = payee
        let transactDate = new Date()
    }
}
const trans1 = new Transaction(1000, 'paycheck')
const trans2 = new Transaction(-200, 'HEB')
const trans3 = new Transaction(-50, 'Amazon')