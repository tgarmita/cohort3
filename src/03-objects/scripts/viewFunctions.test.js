import viewFunctions from './viewFunctions.js'
// import { createAccountCard } from './viewFunctions.js'

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

    test('createAccountCard(accountName) creates account card and buttons', () => {
        const cardChildCount = idCardPanel.childElementCount;

        viewFunctions.createAccountCard("Checking Account");
        expect(idCardPanel.childElementCount).toEqual(cardChildCount + 1);
        expect(idCardPanel.lastElementChild.id).toEqual("Checking Account");
        expect(idCardPanel.lastElementChild.lastElementChild.textContent).toEqual("×");
    });

    test('addToAccountList(accountName, accountBalance) adds account to list node', () => {
        const listChildCount = idAccountList.childElementCount;

        viewFunctions.addToAccountList("Checking Account", 55);
        expect(idAccountList.childElementCount).toEqual(listChildCount + 1);
        expect(idAccountList.lastElementChild.id).toEqual("idListItem-Checking Account");
        expect(idAccountList.lastElementChild.textContent).toEqual("Checking Account: $55");
    });
    
    test('removeFromAccountList(accountName) removes account from the list node by name', () => {
        viewFunctions.addToAccountList("Savings Account", 100);
        viewFunctions.addToAccountList("Checking Account", 55);
        const listChildCount = idAccountList.childElementCount;

        viewFunctions.removeFromAccountList("Savings Account");

        expect(idAccountList.childElementCount).toEqual(listChildCount - 1);
        expect(idAccountList.firstElementChild.id).toEqual("idListItem-Checking Account");
    });



});