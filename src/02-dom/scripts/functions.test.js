import * as functions from './functions.js';

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

test('showChildren() returns children of list element', function () {
    let jestList = document.getElementById('idList');
    expect(functions.showChildren(jestList)).toEqual(["Item 1", "Item 2", "Item 3"]);
});


test('createListElement() creates a new list item', function () {
    let jestList = document.getElementById('idList');
    let listCount = jestList.childElementCount

    functions.createListElement();
    expect(jestList.childElementCount).toEqual(listCount + 1);
});

test('appendCardElement() creates a new card at the end of the panel', function () {
    let jestLeftPanel = document.getElementById('idLeftPanel');
    let childCount = jestLeftPanel.childElementCount;
    let cardCount = childCount - 1;
    let lastCard = jestLeftPanel.lastElementChild;

    functions.appendCardElement();

    expect(jestLeftPanel.childElementCount).toEqual(childCount + 1);
    expect(lastCard.nextElementSibling).toEqual(jestLeftPanel.lastChild);
    expect(jestLeftPanel.lastElementChild.firstChild.textContent).toEqual("Card " + (Number(cardCount) + 1));
});

test('addCardButtons() appends buttons to cards', function () {
    let newCard = document.createElement("DIV");

    functions.addCardButtons(newCard);

    expect(newCard.children[1].firstChild.nodeValue).toEqual("Add Before");
});

test('addCardBefore() creates a new card before the current card', function () {
    let jestLeftPanel = document.getElementById('idLeftPanel');
    functions.appendCardElement();
    functions.appendCardElement();
    let childCount = jestLeftPanel.childElementCount;
    let cardCount = childCount - 1;
    let currentCard = jestLeftPanel.children[2];

    functions.addCardBefore(currentCard);

    expect(jestLeftPanel.childElementCount).toEqual(childCount + 1);
    expect(currentCard.previousElementSibling.firstChild.textContent).toEqual("Card " + (Number(cardCount) + 1));
});

test('addCardAfter() creates a new card after the current card', function () {
    let jestLeftPanel = document.getElementById('idLeftPanel');
    functions.appendCardElement();
    let childCount = jestLeftPanel.childElementCount;
    let cardCount = childCount - 1;
    let currentCard = jestLeftPanel.children[1];

    functions.addCardAfter(currentCard);

    expect(jestLeftPanel.childElementCount).toEqual(childCount + 1);
    expect(currentCard.nextElementSibling.firstChild.textContent).toEqual("Card " + (Number(cardCount) + 1));
});

test('deleteCard() deletes the current card', function () {
    let jestLeftPanel = document.getElementById('idLeftPanel');
    functions.appendCardElement();
    functions.appendCardElement();
    let childCount = jestLeftPanel.childElementCount;
    let cardCount = childCount - 1;
    let currentCard = jestLeftPanel.children[1];

    functions.deleteCard(currentCard);

    expect(jestLeftPanel.childElementCount).toEqual(childCount - 1);
    expect(jestLeftPanel.children[1].firstChild.textContent).toEqual("Card 2");
});


//test structure from https://dev.to/snowleo208/things-i-learned-after-writing-tests-for-js-and-html-page-4lja
