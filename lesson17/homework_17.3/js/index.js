class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    deposit(sum) {
        this.balance += sum;
    }

    withdraw(sum) {
        this.balance -= sum;
    }

    getBalance() {
        return this.balance;
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance());

account1.deposit(500);
console.log(account1.getBalance()); 

account1.withdraw(200);
console.log(account1.getBalance()); 
