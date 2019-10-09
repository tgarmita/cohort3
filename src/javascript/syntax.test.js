import * as Functions from './syntax'

test('Test if number', () => {
    expect(Functions.num()).toBe("number");
});

test('Test if string', () => {
    expect(Functions.str()).toBe("string");
});

test('Test if boolean', () => {
    expect(Functions.bool()).toBe("boolean");
});

//This test expects true because the function tests an array with Array.isArray()
test('Test if is array', () => {
    expect(Functions.arry()).toBe(true);
});

// test('Test if number', () => {
//     expect(Functions.num()).toBe("number");
// });


