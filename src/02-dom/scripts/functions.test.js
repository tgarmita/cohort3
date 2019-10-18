import * as functions from './functions.js';

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

jest
    .dontMock('fs');

describe('button', function () {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    });

    afterEach(() => {
        // restore the original func after test
        jest.resetModules();
    });

    test('button exists', function () {
        expect(document.getElementById('idAdd')).toBeTruthy();
    });


    test('add function creates properly numbered item', function () {
        let jestList = document.getElementById('idList');
        functions.createListElement();
        expect(jestList.lastElementChild.textContent).toBe("Item 4");
    });
});

//test structure from https://dev.to/snowleo208/things-i-learned-after-writing-tests-for-js-and-html-page-4lja
