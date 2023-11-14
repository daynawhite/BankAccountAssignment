
// let currentBalance = 0
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
        let currentBalance = 0
        // compute balance by adding up amounts from transaction array
        for(let i=0; i<this.transactions.length; i++) {
            currentBalance += this.transactions[i].amount;
        }
        return currentBalance
    }
    deposit(payee, depAmt) {
        // creates a new transaction representing the deposit, and adds it to the transactions array
        newDeposit = new Transaction(payee, depAmt)
        this.transactions.push(newDeposit)
    }
    charge(payee, amt) {
        // let chargeOpposite = -1 * amt;
        // if (chargeOpposite <= this.balance()) {
      
        // creates a new transaction with payee and amt;
        newCharge = new Transaction(payee, amt);
        // adds the new transaction to the transaction array
        this.transactions.push(newCharge)}
    }

class Transaction {
    constructor (payee, amount) {
        this.amount = amount
        this.payee = payee
        this.transactDate = new Date()
    }
}
class SavingsAccount extends BankAccount {
    constructor (interestRate, accountNumber, owner) {
        super(accountNumber, owner);
        this.interestRate = interestRate;
        this.transactions = []
    }
    accrueInterest() {
        let interestAmt = currentBalance * this.interestRate + currentBalance;
        let interestDeposit = new Transaction("interest", interestAmt);
        this.transactions.push(interestAmt)
    }
}
// Below is my method for checking to see if everything works as expected:

function addTransaction(acct, payee, amt) {
    if (amt > 0) {
        acct.deposit(payee, amt);
    } else {
        acct.charge(payee, amt);
    }
}
let acct1 = new BankAccount(1234, "JD")
let acct2 = new SavingsAccount(.02, 1235, "JD")
addTransaction(acct1, 'paycheck', 1000)
addTransaction(acct1, "HEB", -200)
addTransaction(acct1, 'Amazon', -50)
console.log(acct1)
console.log(acct1.balance())
console.log(acct2)
addTransaction(acct2, 'deposit', 20000)
addTransaction(acct2, 'depost', 4500)
console.log(acct2.transactions)
console.log(acct2.balance())


