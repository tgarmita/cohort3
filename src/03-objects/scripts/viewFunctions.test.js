import viewFunctions from './viewFunctions.js'
import { AccountController } from './account.js'

describe('DOM Testing', () => {

    const fs = require('fs');
    const path = require('path');
    const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

    jest.dontMock('fs');


    beforeEach(() => {
        //import entire html file before each test function
        document.documentElement.innerHTML = html.toString();
    });

    afterEach(() => {
        // restore the original func after test
        jest.resetModules();
    });

    test('createAccountCard() creates account card and buttons', () => {
        const panelChildCount = idCardPanel.childElementCount;

        viewFunctions.createAccountCard("Checking Account", 5);
        expect(idCardPanel.childElementCount).toEqual(panelChildCount + 1);
        expect(idCardPanel.lastElementChild.id).toEqual("Checking Account");
        expect(idCardPanel.lastElementChild.lastElementChild.textContent).toEqual("×"); //delete button
    });

    test('deleteCard() deletes card', () => {
        viewFunctions.createAccountCard("Savings Account", 5);
        viewFunctions.createAccountCard("Checking Account", 5);
        const panelChildCount = idCardPanel.childElementCount;
        const card = idCardPanel.lastElementChild;

        viewFunctions.deleteCard(card)

        expect(idCardPanel.childElementCount).toEqual(panelChildCount - 1);
        expect(idCardPanel.lastElementChild.id).toEqual("Savings Account");
    });
    
    test('refreshAccountList() updates idAccountList during relevant events', () => {
        const banker = new AccountController();
        
        banker.createAccount("Savings Account", 5);
        viewFunctions.refreshAccountList(banker.getAccounts());


        expect(idAccountList.childElementCount).toEqual(1);

        banker.createAccount("Checking Account", 55);
        viewFunctions.refreshAccountList(banker.getAccounts());

        expect(idAccountList.childElementCount).toEqual(2);
        expect(idAccountList.lastElementChild.textContent).toEqual("Checking Account: $55");

        
        banker.removeAccount(banker.getAccount("Savings Account").name);
        viewFunctions.refreshAccountList(banker.getAccounts());
   
        expect(idAccountList.childElementCount).toEqual(1);
        expect(idAccountList.firstElementChild.textContent).toEqual("Checking Account: $55");

        //add tests for other card events
    });

    // test('addToAccountList(accountName, accountBalance) adds account to list node', () => {
    //     const listChildCount = idAccountList.childElementCount;

    //     viewFunctions.addToAccountList("Checking Account", 55);
    //     expect(idAccountList.childElementCount).toEqual(listChildCount + 1);
    //     expect(idAccountList.lastElementChild.id).toEqual("idListItem-Checking Account");
    //     expect(idAccountList.lastElementChild.textContent).toEqual("Checking Account: $55");
    // });
    
    // test('removeFromAccountList(accountName) removes account from the list node by name', () => {
    //     viewFunctions.addToAccountList("Savings Account", 100);
    //     viewFunctions.addToAccountList("Checking Account", 55);
    //     const listChildCount = idAccountList.childElementCount;

    //     viewFunctions.removeFromAccountList("Savings Account");

    //     expect(idAccountList.childElementCount).toEqual(listChildCount - 1);
    //     expect(idAccountList.firstElementChild.id).toEqual("idListItem-Checking Account");
    // });

    



});