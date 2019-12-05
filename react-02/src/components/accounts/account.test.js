import { Account, AccountController } from './account.js'


describe('Account Testing', () => {
    test('deposit(value) adds value to currentBalance', () => {
        const checkingAccount = new Account("Checking Account", 100);
        checkingAccount.deposit(50);
        expect(checkingAccount.currentBalance).toEqual(150);
    });

    test('withdraw(value) subtracts value from currentBalance', () => {
        const checkingAccount = new Account("Checking Account", 100);
        checkingAccount.withdraw(25);
        expect(checkingAccount.currentBalance).toEqual(75);
    });
});


describe('Account Controller Testing', () => {
    const banker = new AccountController();

    test('createAccount() adds new account to accountList, and returns error message for duplicate', () => {
        const banker = new AccountController();

        banker.createAccount("Savings Account", 5);

        expect(banker.accountArray[0].name).toEqual("Savings Account");
        expect(banker.createAccount("Savings Account", 5)).toEqual("Savings Account already exists. Please choose another name.");
    });

    test('getAccount(name) returns account by name', () => {
        const banker = new AccountController();
        banker.createAccount("Checking Account", 75);

        expect(banker.getAccount("Checking Account")).toEqual({ "currentBalance": 75, "name": "Checking Account" });
        expect(banker.getAccount("Non-existent Account")).toEqual(undefined);
        expect(banker.getAccount("")).toEqual(undefined);
    });

    test('removeAccount() removes account of that name', () => {
        const banker = new AccountController();
        banker.createAccount("Savings Account", 5);
        banker.createAccount("Checking Account", 75);
        const accountCount = banker.accountArray.length
        
        banker.removeAccount("Savings Account");
        expect(banker.accountArray.length).toEqual(accountCount - 1);
        expect(banker.accountArray).toEqual([{ "currentBalance": 75, "name": "Checking Account" }]);
    });

    test('totalAccounts() returns total balance of all accounts', () => {
        const banker = new AccountController();
        banker.createAccount("Joint Account", 500);
        banker.createAccount("Holiday Account", 25);

        expect(banker.totalAccounts()).toEqual(525);
    });

    test('mostValuableAccount() returns account with highest balance', () => {
        const banker = new AccountController();
        banker.createAccount("Joint Account", 500);
        banker.createAccount("Holiday Account", 25);


        expect(banker.mostValuableAccount()).toEqual({ "currentBalance": 500, "name": "Joint Account" });
    });

    test('leastValuableAccount() returns account with highest balance', () => {
        const banker = new AccountController();
        banker.createAccount("Joint Account", 500);
        banker.createAccount("Holiday Account", 25);

        expect(banker.leastValuableAccount()).toEqual({ "currentBalance": 25, "name": "Holiday Account" });
    });
});