import * as functions from './daily'

//Oct16 - More for Array Work
test('array slice', () => {
    expect(functions.arrSlice([1,2,3,4], 1,3)).toEqual([2,3]);
    expect(functions.arrSlice(["a","b","c","d"], 1,3)).toEqual(["b","c"]);
});

test('array splice', () => {
    expect(functions.arrSplice([1,2,3,4], 1,2,10)).toEqual([1,10,4]);
    expect(functions.arrSplice(["a","b","c","d"], 1,2, "k")).toEqual(["a","k","d"]);
});

//Oct15 - Prepare for Array Work

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


//Oct7 - AssertEquals
test('Compare the parameters', () => {
    expect(functions.assertEquals("a","b")).toBe(false);
    expect(functions.assertEquals("a","a")).toBe(true);
    expect(functions.assertEquals(1,2)).toBe(false);
    expect(functions.assertEquals(2,2)).toBe(true);
    expect(functions.assertEquals("2",2)).toBe(false);
    expect(functions.assertEquals("This value","This value")).toBe(true);
});