import * as functions from './syntax'

// define attributes / variables
// number
test('Test if number', () => {
    expect(functions.num()).toBe("number");
});


// string
test('Test if string', () => {
    expect(functions.str()).toBe("string");
});


// boolean
test('Test if boolean', () => {
    expect(functions.bool()).toBe("boolean");
});


// array
//This test expects true because the function tests an array with Array.isArray()
test('Test if array', () => {
    expect(functions.arry()).toBe(true);
});

test('Test accessing an array element', () => {
    expect(functions.arryEle()[1]).toBe("two");
});


// dictionary / objects
test('Test if object', () => {
    expect(functions.obj()).toBe("object");
});

test('Test if object has a property', () => {
    expect(functions.objProp().title).toBe("California Dreamin'"); //can check with dot notation
    expect(functions.objProp()).toHaveProperty("title", "California Dreamin'"); //or with .toHaveProperty
});

// undefined
test('Test if undefined', () => {
    let a;
    let b = undefined;
    function c() { console.log("Should return undefined") };

    expect(functions.undef(a)).toBe(undefined);
    expect(functions.undef(b)).toBe(undefined);
    expect(functions.undef(c())).toBe(undefined);
});

// sample if / else
test('Use if/else to test if even or odd number', () => {
    expect(functions.evenOdd(2)).toBe("even");
    expect(functions.evenOdd(3)).toBe("odd");
});

// functions
// parameters
test('Test adding parameters', () => {
    expect(functions.funcPs(2, 2, "Sum of p1 and p2 = ")).toBe("Sum of p1 and p2 = 4");
});


//returns
test('Test what happens when multiple return statements', () => {
    expect(functions.funcReturn(1)).toBe(1);
});

// arrays
// add to the front
test('Test array.unshift()', () => {
    expect(functions.arrAddFront(["b", "c"], "a")).toStrictEqual(["a", "b", "c"]);
});

// add to the end
test('Test array.push()', () => {
    expect(functions.arrAddEnd(["b", "c"], "d")).toStrictEqual(["b", "c", "d"]);
});

// update values
test('Test updating array values', () => {
    expect(functions.arrUpdate(["b", "c"], "bee", 0)).toStrictEqual(["bee", "c"]);
});


// loops 
// for
test('Test for loop', () => {
    expect(functions.forLoop(["a"])).toBe(1);
    expect(functions.forLoop(["a", "b", "c"])).toBe(3);
});
// for/in
test('Test for/in loop', () => {
    expect(functions.forIn({ name: "Tyler", age: 33, location: "Calgary" })).toBe("Tyler/33/Calgary");
});

// while
test('Test while loop', () => {
    expect(functions.whileLoop(["a"])).toBe(1);
    expect(functions.whileLoop(["a", "b", "c"])).toBe(3);
});
    
// do while
test('Test do while loop', () => {
    expect(functions.doWhile(["a"])).toBe(1);
    expect(functions.doWhile(["a", "b", "c"])).toBe(3);
});

// forEach (with array and function)
test('Test forEach() method', () => {
    let a = ["a"];
    let abc = ["a", "b", "c"]
    expect(functions.forE(a)).toStrictEqual(["a!"]);
    expect(functions.forE(abc)).toStrictEqual(["a!","b!","c!"]);
});

// Objects / Dictionaries
    // declare object
    test('Test if declared as object', () => {
        expect(functions.decObj()).toBe("object");
    });
    
    test('Test object key lookup', () => {
        expect(functions.objLookup()).toBe("Fruit");
    });


    // lookup key to retrieve value



