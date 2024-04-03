class BankAccount {
  constructor(accountNumber, ownerName, balance) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(
      `Amount $${amount} deposited into account ${this.accountNumber}.`
    );
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Amount $${amount} withdrawn from account ${this.accountNumber}`);
    } else {
      console.log(`Insufficient funds in account ${this.accountNumber}`);
    }
  }

  displayAccountInfo() {
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Owner Name: ${this.ownerName}`);
    console.log(`balance: ${this.balance}`);
  }
}

const account1 = new BankAccount("1001", "Toufiqur", 1500);
const account2 = new BankAccount('1002', 'Sobuj', 3000);

//Account 1
console.log('Account Number One Information:')
console.log('Innisial Account Info:')
account1.displayAccountInfo();

console.log('deposit and withdraw:')
account1.deposit(500);
account1.withdraw(700);

console.log('Update Account Info:')
account1.displayAccountInfo();

//Account 2
console.log('Account Number Tow Information:')
console.log('Innisial Account Info:')
account2.displayAccountInfo();

console.log('deposit and withdraw:')
account2.deposit(800);
account2.withdraw(400);

console.log('Update Account Info:')
account2.displayAccountInfo();