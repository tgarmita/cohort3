export class Account {
    constructor(name, startingBalance) {
        this.name = name;
        this.currentBalance = startingBalance;
    }

    deposit(value) {
        this.currentBalance += Math.round(Number(value) * 100) / 100;
    }

    withdraw(value) {
        this.currentBalance -= Math.round(Number(value) * 100) / 100;
    }
}


export class AccountController {
    constructor() {
        this.accountArray = [];
    }

    createAccount(name, startingBalance) {
        if (!this.getAccount(name)) {
            this.accountArray.push(new Account(name, Math.round(Number(startingBalance) * 100) / 100));
            return "";
        } else {
            return `${name} already exists. Please choose another name.`;
        }
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
