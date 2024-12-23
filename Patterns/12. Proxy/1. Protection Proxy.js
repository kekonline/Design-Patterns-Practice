class BankAccount {
    constructor(accountHolder, balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawn: $${amount}. New balance: $${this.balance}`);
        } else {
            console.log('Insufficient funds');
        }
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
    }
}

class BankAccountProxy {
    constructor(bankAccount, userRole) {
        this.bankAccount = bankAccount;
        this.userRole = userRole;
    }

    withdraw(amount) {
        if (this.userRole === 'admin') {
            console.log('Admin privileges granted. Proceeding with withdrawal.');
            this.bankAccount.withdraw(amount);
        } else if (this.userRole === 'user' && amount <= 500) {
            console.log('User privileges granted. Proceeding with withdrawal (limited).');
            this.bankAccount.withdraw(amount);
        } else {
            console.log('Insufficient permissions to withdraw this amount.');
        }
    }

    deposit(amount) {
        console.log('Deposit operation allowed for all users.');
        this.bankAccount.deposit(amount);
    }
}

// Usage:
const bankAccount = new BankAccount('John Doe', 1000);

// Admin can withdraw any amount
const adminProxy = new BankAccountProxy(bankAccount, 'admin');
adminProxy.withdraw(700);  // Allowed for admin
adminProxy.deposit(200);   // Deposit is allowed for everyone

// Regular user can only withdraw up to 500
const userProxy = new BankAccountProxy(bankAccount, 'user');
userProxy.withdraw(300);  // Allowed for user
userProxy.withdraw(700);  // Not allowed for user
