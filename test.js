const transactions = [
    {
      amount: 1000,
      payee: 'paycheck'
    },
   {
      amount: -200,
      payee: 'HEB'
    },
    {
      amount: -50,
      payee: 'Amazon'
    }
  ]
  
  // filter this.transactions to an new array consisting only of amounts

  const currentBalance = transactions.reduce(
      function(a, curr) {
        return a += curr.amount;
  console.log('result ', result);
  console.log('curr', curr.amount);
      // result.push(curr.amount)
    //   return result;
      }, 0
  )
  console.log(currentBalance)
  // compute balance by adding up amounts from transactions array
  // currentBalance = transactionAmounts.reduce(getSum)
  // return currentBalance
  