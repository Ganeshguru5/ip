class Bank {
  constructor(deposit, ifscode, branch) {
    this.ifscode = ifscode
    this.branch = branch
    this.deposit = deposit
    Bank.#bankbalance = Bank.#bankbalance + deposit;
  }
  static #bankbalance = 0
  static getBankBalance() {
    console.log(this.#bankbalance)
  }
}

class BankAccount extends Bank {
  constructor(id, username,deposit, ifscode, branch) {
    super(deposit,ifscode, branch)
    this.id = id
    this.username = username
  }
}

const ganesh = new BankAccount(1, "ganesh", 1000, "12345", "madurai")
const geo = new BankAccount(2, "geo", 1000, "12345", "madurai")
Bank.getBankBalance()
