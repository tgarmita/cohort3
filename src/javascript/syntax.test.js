import * as Functions from './syntax'

// define attributes / variables
// number
test('Test if number', () => {
    expect(Functions.num()).toBe("number");
});


// string
test('Test if string', () => {
    expect(Functions.str()).toBe("string");
});


// boolean
test('Test if boolean', () => {
    expect(Functions.bool()).toBe("boolean");
});


// array
//This test expects true because the function tests an array with Array.isArray()
test('Test if array', () => {
    expect(Functions.arry()).toBe(true); 
});

test('Test accessing an array element', () => {
    expect(Functions.arryEle()[1]).toBe("two");
});


// dictionary / objects
test('Test if object', () => {
    expect(Functions.obj()).toBe("object");
});

test('Test if object has a property', () => {
    expect(Functions.objProp().title).toBe("California Dreamin'"); //can check with dot notation
    expect(Functions.objProp()).toHaveProperty("title", "California Dreamin'"); //or with .toHaveProperty
});

// undefined
test('Test if undefined', () => {
    let a;
    let b = undefined;
    function c() {console.log("Should return undefined")};

    expect(Functions.undef(a)).toBe(undefined);
    expect(Functions.undef(b)).toBe(undefined);
    expect(Functions.undef(c())).toBe(undefined);
});

// sample if / else
test('Use if/else to test if even or odd number', () => {
    expect(Functions.evenOdd(2)).toBe("even");
    expect(Functions.evenOdd(3)).toBe("odd");
});

// functions
// parameters
test('Test adding parameters', () => {
    expect(Functions.funcPs(2,2, "Sum of p1 and p2 = ")).toBe("Sum of p1 and p2 = 4");
});


//returns
test('Test what happens when multiple return statements', () => {
    expect(Functions.funcReturn(1)).toBe(1);
});

// arrays
// add to the front
test('Test array.unshift()', () => {
    expect(Functions.arrAddFront(["b","c"], "a")).toStrictEqual(["a","b","c"]);
});

// add to the end
test('Test array.push()', () => {
    expect(Functions.arrAddEnd(["b","c"], "d")).toStrictEqual(["b","c","d"]);
});
// update values
test('Test updating array values', () => {
    expect(Functions.arrUpdate(["b","c"], "bee", 0)).toStrictEqual(["bee","c"]);
});




