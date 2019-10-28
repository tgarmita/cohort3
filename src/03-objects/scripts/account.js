export class Account {
    constructor(name, startingBalance) {
        this.name = name;
        this.currentBalance = startingBalance;
    }

    deposit(value) {
        this.currentBalance += value;
    }

    withdraw(value) {
        this.currentBalance -= value;
    }

    balance() {
        return this.currentBalance;
    }
}


export class AccountController {
    //might want to pass "view model" somehow through constructor?
    constructor() {
        this.accountList = [];
    }

    createAccount(name, startingBalance) {
        this.accountList.push(new Account(name, startingBalance));
    }

    getAccountList() {
        return this.accountList;
    }

    removeAccount(name) {
        this.accountList = this.accountList.filter(account => account.name !== name);
    }

    totalAccounts() {
        return this.accountList.reduce(((accumulator, account) => accumulator + account.currentBalance),0);
    }

    mostValuableAccount() {
        return this.accountList.sort((a,b) => b.currentBalance -  a.currentBalance)[0];
    }

    leastValuableAccount() {
        return this.accountList.sort((a,b) => a.currentBalance -  b.currentBalance)[0];
    }
}
