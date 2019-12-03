export class Account {
    constructor(name, startingBalance) {
        this.name = name;
        this.currentBalance = startingBalance;
    }

    deposit(value) {
        this.currentBalance += Number(value);
    }

    withdraw(value) {
        this.currentBalance -= Number(value);
    }
}


export class AccountController {
    constructor() {
        this.accountArray = [];
    }

    createAccount(name, startingBalance) {
        this.accountArray.push(new Account(name, Number(startingBalance)));
    }

    getAccount(name) {
        return this.accountArray.filter(account => account.name === name)[0];
    }

    removeAccount(name) {
        this.accountArray = this.accountArray.filter(account => account.name !== name);
    }

    totalAccounts() {
        return this.accountArray.reduce(((accumulator, account) => accumulator + account.currentBalance), 0);
    }

    mostValuableAccount() {
        const copy = this.accountArray.slice();
        return copy.sort((a, b) => b.currentBalance - a.currentBalance)[0];
    }

    leastValuableAccount() {
        const copy = this.accountArray.slice();
        return copy.sort((a, b) => a.currentBalance - b.currentBalance)[0];
    }
}
