import * as functions from './daily'
//Nov22


//Nov21
test('summarizePeople() return object of total number of people, total age, and the average age - from Alberta or BC only', () => {
    expect(functions.summarizePeople(people)).toEqual({ totalPeople: 22, totalAge: 838, averageAge: 38.09090909090909 });
});


//Nov8 - Callback Exercise (Part 1)
test('filterProvinces(people) filters out people not from Alberta or BC', () => {
    const peopleABBC = functions.filterProvinces(people);
    expect(peopleABBC[2]).toEqual({ fname: "Byron", lname: "Cardenas", province: "BC", age: 38 });
});

test('makeNames() filters out people not from Alberta or BC', () => {
    expect(functions.makeNames(people[1])).toEqual("Angela Jones");
});

test('filterProvinces(people, callBackF) filters out people not from Alberta or BC, and then returns an array of those names', () => {
    expect(functions.filterProvinces(people, functions.makeNames)[1]).toEqual("Angela Jones");
    expect(functions.filterProvinces(people, functions.makeNames)[2]).toEqual("Byron Cardenas");
});

const people = [
    { fname: "Alex", lname: "Smith", province: "BC", age: 33 },
    { fname: "Angela", lname: "Jones", province: "AB", age: 61 },
    { fname: "Anne", lname: "Bird", province: "SK", age: 35 },
    { fname: "Brent", lname: "Riddle", province: "MN", age: 79 },
    { fname: "Byron", lname: "Cardenas", province: "BC", age: 38 },
    { fname: "Carrie", lname: "Ramirez", province: "AB", age: 89 },
    { fname: "Cheryl", lname: "Glenn", province: "SK", age: 70 },
    { fname: "Dima", lname: "Curry", province: "MN", age: 67 },
    { fname: "Dustin", lname: "Bullock", province: "BC", age: 59 },
    { fname: "Eva", lname: "Keiths", province: "AB", age: 24 },
    { fname: "Faith", lname: "Liu", province: "SK", age: 46 },
    { fname: "Fawad", lname: "Bowman", province: "MN", age: 69 },
    { fname: "Forest", lname: "Vaughn", province: "BC", age: 52 },
    { fname: "Giovanni", lname: "Browning", province: "AB", age: 32 },
    { fname: "Greg", lname: "Hogan", province: "SK", age: 55 },
    { fname: "Harpreet", lname: "Ramsey", province: "MN", age: 18 },
    { fname: "Ian", lname: "Fitzgerald", province: "BC", age: 16 },
    { fname: "James", lname: "Kramer", province: "AB", age: 57 },
    { fname: "Jarvis", lname: "Ortega", province: "SK", age: 69 },
    { fname: "Jawad", lname: "Huerta", province: "MN", age: 35 },
    { fname: "Jinbong", lname: "Robinson", province: "BC", age: 26 },
    { fname: "Jingnan", lname: "Hatfield", province: "AB", age: 71 },
    { fname: "Joe", lname: "Banks", province: "SK", age: 37 },
    { fname: "Kristina", lname: "Dalton", province: "MN", age: 73 },
    { fname: "Latora", lname: "Matthews", province: "BC", age: 25 },
    { fname: "Lauren", lname: "McClure", province: "AB", age: 42 },
    { fname: "Licedt", lname: "Rasmussen", province: "SK", age: 30 },
    { fname: "Linden", lname: "Pierce", province: "MN", age: 68 },
    { fname: "Luis", lname: "Price", province: "BC", age: 23 },
    { fname: "Marcela", lname: "Perez", province: "AB", age: 20 },
    { fname: "Marilou", lname: "Graham", province: "SK", age: 32 },
    { fname: "Matt", lname: "Novak", province: "MN", age: 29 },
    { fname: "Monica", lname: "Giles", province: "BC", age: 34 },
    { fname: "Niloufar", lname: "Carson", province: "AB", age: 29 },
    { fname: "Omar", lname: "Olson", province: "SK", age: 69 },
    { fname: "Roger", lname: "Woodard", province: "MN", age: 84 },
    { fname: "Roman", lname: "Swanson", province: "BC", age: 21 },
    { fname: "Seun", lname: "Kelly", province: "AB", age: 60 },
    { fname: "Shane", lname: "Frost", province: "SK", age: 87 },
    { fname: "Steven", lname: "Haynes", province: "MN", age: 47 },
    { fname: "Thomas", lname: "Hart", province: "BC", age: 14 },
    { fname: "Trent", lname: "Kerr", province: "AB", age: 12 },
    { fname: "Darrell", lname: "Koch", province: "SK", age: 10 },
    { fname: "Tylor", lname: "Torres", province: "MN", age: 98 }
];


//Nov6 - More Array Exercises (Really)
test('filterBalances()', () => {
    expect(functions.filterBalances(data.staff)).toEqual([1000, 1330]);
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