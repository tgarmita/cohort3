import {Account} from './account'


describe('Account Testing', () => {
    const checkingAccount = new Account("Checking Account", 100);


    test('Account properties and methods', () => {
        expect(checkingAccount.name).toEqual("Checking Account");
        expect(checkingAccount.currentBalance).toEqual(100);

        checkingAccount.deposit(50)

        expect(checkingAccount.currentBalance).toEqual(150);

        checkingAccount.withdraw(25)

        expect(checkingAccount.currentBalance).toEqual(125);

        expect(checkingAccount.balance()).toEqual(125);
    });

});