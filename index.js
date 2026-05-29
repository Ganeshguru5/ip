class Bank {
  constructor(bankName, bankIfscCode) {
    this.bankName = bankName;
    this.bankIfscCode = bankIfscCode;
  }
}

class BankAccont extends Bank {
  constructor(bankName, bankIfscCode, accountNumber, accounHolderName, refId, balance) {
    super(bankName, bankIfscCode)
    this.accountNumber = accountNumber;
    this.accounHolderName = accounHolderName;
    this.refId = refId;
    this.balance = balance;
  }
}

BankAccont.prototype.getBalance = function() {
  return this.balance;
}

const account_1 = new BankAccont("abcn bank", "RBI898", "123243556", "Ganeshguru", "ABCN900", 30000)

console.log(account_1.getBalance(), 'this is account')
