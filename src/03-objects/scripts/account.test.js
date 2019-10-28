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
        expect(banker.accountList[0].name).toEqual("Savings Account");
    });

    test('getAccountList() returns array of all accounts', () => {
        banker.createAccount("Checking Account", 75);
        expect(banker.getAccountList()).toEqual([{ "currentBalance": 5, "name": "Savings Account" }, { "currentBalance": 75, "name": "Checking Account" }]);
    });

    test('removeAccount() removes account of that name', () => {
        const accountCount = banker.getAccountList().length
        banker.removeAccount("Savings Account");
        expect(banker.getAccountList().length).toEqual(accountCount - 1);
        expect(banker.getAccountList()).toEqual([{ "currentBalance": 75, "name": "Checking Account" }]);
    });

    test('totalAccounts() returns total balance of all accounts', () => {
        banker.createAccount("Joint Account", 500);
        banker.createAccount("Holiday Account", 25);
        expect(banker.totalAccounts()).toEqual(600);
    });

    test('mostValuableAccount() returns account with highest balance', () => {
        expect(banker.mostValuableAccount()).toEqual({"currentBalance": 500, "name": "Joint Account"});
    });

    test('leastValuableAccount() returns account with highest balance', () => {
        expect(banker.leastValuableAccount()).toEqual({"currentBalance": 25, "name": "Holiday Account"});
    });
});