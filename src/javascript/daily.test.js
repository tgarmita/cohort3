import * as functions from './daily'

//Nov6 - More Array Exercises (Really)
test('filterBalances()', () => {
    expect(functions.filterBalances(data.staff)).toEqual([1000,1330]);
 });

//Oct29 - More Array Exercises
test('totalBalances()', () => {
   expect(functions.totalBalances(data.staff)).toEqual(3823);
});

test('averageBalances()', () => {
    expect(functions.averageBalances(data.staff)).toEqual(546.1428571428571);
});


//Oct25 - To solve repeating tests
describe('Test functions related to sample data', () => {
    const data = {
        staff: [
            { fname: "Jane", lname: "Smith", balance: 10 },
            { fname: "Liam", lname: "Henry", balance: 1000 },
            { fname: "Emma", lname: "Jones", balance: 1330 },
            { fname: "Olivia", lname: "Notly", balance: 310 },
            { fname: "Noah", lname: "Ho", balance: 503 },
            { fname: "William", lname: "Lee", balance: 520 },
            { fname: "Benjamin", lname: "Amis", balance: 150 },
        ],
        company: "EvolveU",
        city: "Calgary",
        prov: "Alberta"
    };

    const arrFunctions = [functions.loopStaffForEach(data.staff), functions.loopStaffMap(data.staff),
    functions.loopStaffIn(data.staff), functions.loopStaffOf(data.staff), functions.loopStaff(data.staff)];


    arrFunctions.forEach((functionCall, index) => {
        test(`run email builder tests for each function in arrFunctions: ${index}`, () => {
            const staffEmail = functionCall;
            expect(staffEmail[1]).toEqual("liam.henry@evolveu.ca");
            expect(staffEmail[2]).toEqual("emma.jones@evolveu.ca");
            expect(staffEmail[5]).toEqual("william.lee@evolveu.ca");
        });
    });
});

//Oct 25 - Old way
test('email builder using forEach', () => {
    const staffEmail = functions.loopStaffForEach(data.staff);
    expect(staffEmail[1]).toEqual("liam.henry@evolveu.ca");
    expect(staffEmail[2]).toEqual("emma.jones@evolveu.ca");
    expect(staffEmail[5]).toEqual("william.lee@evolveu.ca");
});


test('email builder using map', () => {
    const staffEmail = functions.loopStaffMap(data.staff);
    expect(staffEmail[1]).toEqual("liam.henry@evolveu.ca");
    expect(staffEmail[2]).toEqual("emma.jones@evolveu.ca");
    expect(staffEmail[5]).toEqual("william.lee@evolveu.ca");
});



//Oct24
test('email builder using for/in', () => {
    const staffEmail = functions.loopStaffIn(data.staff);
    expect(staffEmail[1]).toEqual("liam.henry@evolveu.ca");
    expect(staffEmail[2]).toEqual("emma.jones@evolveu.ca");
    expect(staffEmail[5]).toEqual("william.lee@evolveu.ca");
});

test('email builder using for/of', () => {
    const staffEmail = functions.loopStaffOf(data.staff);
    expect(staffEmail[1]).toEqual("liam.henry@evolveu.ca");
    expect(staffEmail[2]).toEqual("emma.jones@evolveu.ca");
    expect(staffEmail[5]).toEqual("william.lee@evolveu.ca");
});



//Oct22
/*
    Sample data for the next few exercises.
*/
const data = {
    staff: [
        { fname: "Jane", lname: "Smith", balance: 10 },
        { fname: "Liam", lname: "Henry", balance: 1000 },
        { fname: "Emma", lname: "Jones", balance: 1330 },
        { fname: "Olivia", lname: "Notly", balance: 310 },
        { fname: "Noah", lname: "Ho", balance: 503 },
        { fname: "William", lname: "Lee", balance: 520 },
        { fname: "Benjamin", lname: "Amis", balance: 150 },
    ],
    company: "EvolveU",
    city: "Calgary",
    prov: "Alberta"
};

/*	
    Write the function to build email addresses for the company.
*/

test('email builder for company', () => {
    const staffEmail = functions.loopStaff(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});



//Oct16-17 - More Array Work
test('array slice', () => {
    expect(functions.arrSlice([1, 2, 3, 4], 1, 3)).toEqual([2, 3]);
    expect(functions.arrSlice(["a", "b", "c", "d"], 1, 3)).toEqual(["b", "c"]);
});

test('array splice', () => {
    expect(functions.arrSplice([1, 2, 3, 4], 1, 2, 10)).toEqual([1, 10, 4]);
    expect(functions.arrSplice(["a", "b", "c", "d"], 1, 2, "k")).toEqual(["a", "k", "d"]);
});

test('array forEach()', () => {
    expect(functions.arrForEach([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
});

test('array map', () => {
    expect(functions.arrMap([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
});

test('array reduce', () => {
    expect(functions.arrReduce([1, 2, 3, 4])).toEqual(10);
});

test('array filter', () => {
    expect(functions.arrFilter([1, 2, 3, 4])).toEqual([2, 4]);
});

test('array sort numerically', () => {
    expect(functions.arrSortNum([3, 100, 25, 7])).toEqual([3, 7, 25, 100]);
});

test('array sort alphabetically', () => {
    expect(functions.arrSortAlpha(["b", "d", "c", "a"])).toEqual(["a", "b", "c", "d"]);
});


//Oct15 - Prepare for Array Work

test('array for loop', () => {
    expect(functions.forLoop(1, 2, 3)).toEqual([1, 2, 3]);
    expect(functions.forLoop("a", "b", "c")).toEqual(["a", "b", "c"]);
});

test('array while loop', () => {
    expect(functions.whileLoop(1, 2, 3)).toEqual([1, 2, 3]);
    expect(functions.whileLoop("a", "b", "c")).toEqual(["a", "b", "c"]);
});

test('array do while loop', () => {
    expect(functions.doWhileLoop(1, 2, 3)).toEqual([1, 2, 3]);
    expect(functions.doWhileLoop("a", "b", "c")).toEqual(["a", "b", "c"]);
});

test('array for in loop', () => {
    expect(functions.forIn(1, 2, 3)).toEqual([1, 2, 3]);
    expect(functions.forIn("a", "b", "c")).toEqual(["a", "b", "c"]);
});

test('array for of loop', () => {
    expect(functions.forOf(1, 2, 3)).toEqual([1, 2, 3]);
    expect(functions.forOf("a", "b", "c")).toEqual(["a", "b", "c"]);
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
    expect(functions.assertEquals("a", "b")).toBe(false);
    expect(functions.assertEquals("a", "a")).toBe(true);
    expect(functions.assertEquals(1, 2)).toBe(false);
    expect(functions.assertEquals(2, 2)).toBe(true);
    expect(functions.assertEquals("2", 2)).toBe(false);
    expect(functions.assertEquals("This value", "This value")).toBe(true);
});