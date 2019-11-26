import { Account, AccountController } from './account.js'


describe('Account Testing', () => {
    const checkingAccount = new Account("Checking Account", 100);


    test('Account properties', () => {
        expect(checkingAccount.name).toEqual("Checking Account");
        expect(checkingAccount.currentBalance).toEqual(100);
    });

    test('deposit(value) adds value to currentBalance', () => {
        checkingAccount.deposit(50);
        expect(checkingAccount.currentBalance).toEqual(150);
    });

    test('withdraw(value) subtracts value from currentBalance', () => {
        checkingAccount.withdraw(25);
        expect(checkingAccount.currentBalance).toEqual(125);
    });

    test('balance() returns currentBalance', () => {
        expect(checkingAccount.balance()).toEqual(125);
    });
});


describe('Account Controller Testing', () => {
    const banker = new AccountController();


    test('createAccount() adds new account to accountList', () => {
        banker.createAccount("Savings Account", 5);
        expect(banker.accountArray[0].name).toEqual("Savings Account");
    });

    test('getAccounts() returns array of all accounts', () => {
        banker.createAccount("Checking Account", 75);
        expect(banker.getAccounts()).toEqual([{ "currentBalance": 5, "name": "Savings Account" }, { "currentBalance": 75, "name": "Checking Account" }]);
    });

    test('getAccount(name) returns account by name', () => {
        expect(banker.getAccount("Checking Account")).toEqual({ "currentBalance": 75, "name": "Checking Account" });
        expect(banker.getAccount("Non-existent Account")).toEqual(undefined);
        expect(banker.getAccount("")).toEqual(undefined);
    });

    test('removeAccount() removes account of that name', () => {
        const accountCount = banker.getAccounts().length
        banker.removeAccount("Savings Account");
        expect(banker.getAccounts().length).toEqual(accountCount - 1);
        expect(banker.getAccounts()).toEqual([{ "currentBalance": 75, "name": "Checking Account" }]);
    });

    test('totalAccounts() returns total balance of all accounts', () => {
        banker.createAccount("Joint Account", 500);
        banker.createAccount("Holiday Account", 25);
        expect(banker.totalAccounts()).toEqual(600);
    });

    test('mostValuableAccount() returns account with highest balance', () => {
        expect(banker.mostValuableAccount()).toEqual({ "currentBalance": 500, "name": "Joint Account" });
    });

    test('leastValuableAccount() returns account with highest balance', () => {
        expect(banker.leastValuableAccount()).toEqual({ "currentBalance": 25, "name": "Holiday Account" });
    });
});