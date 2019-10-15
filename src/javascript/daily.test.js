import * as functions from './daily'


//Oct7
test('Compare the parameters', () => {
    expect(functions.assertEquals("a","b")).toBe(false);
    expect(functions.assertEquals("a","a")).toBe(true);
    expect(functions.assertEquals(1,2)).toBe(false);
    expect(functions.assertEquals(2,2)).toBe(true);
    expect(functions.assertEquals("2",2)).toBe(false);
    expect(functions.assertEquals("This value","This value")).toBe(true);
});

/*
    Oct9 - Write a function to format an email based on an array.
*/

test('email builder from an array', () => {
    const name = ["first", "last"];
    expect(functions.makeEmailArr(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["First", "Last"]))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["Bill", "Smith"]))
        .toEqual("bill.smith@evolveu.ca");
});


/*	
	Oct11 - Write the function to format an email based on an object / map
*/

test('email builder from an object / map', () => {
    const name = { fname: 'first', lname: 'last' };
    expect(functions.makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
        .toEqual("bill.smith@evolveu.ca");
});


/*	
	Oct15 - Write the function to format an email based on an object / map
*/

test('array for loop', () => {
    expect(functions.forLoop(1,2,3)).toEqual([1,2,3]);
    expect(functions.forLoop("a","b","c")).toEqual(["a","b","c"]);
});

test('array while loop', () => {
    expect(functions.whileLoop(1,2,3)).toEqual([1,2,3]);
    expect(functions.whileLoop("a","b","c")).toEqual(["a","b","c"]);
});

test('array do while loop', () => {
    expect(functions.doWhileLoop(1,2,3)).toEqual([1,2,3]);
    expect(functions.doWhileLoop("a","b","c")).toEqual(["a","b","c"]);
});

test('array for in loop', () => {
    expect(functions.forIn(1,2,3)).toEqual([1,2,3]);
    expect(functions.forIn("a","b","c")).toEqual(["a","b","c"]);
});

test('array for of loop', () => {
    expect(functions.forOf(1,2,3)).toEqual([1,2,3]);
    expect(functions.forOf("a","b","c")).toEqual(["a","b","c"]);
});