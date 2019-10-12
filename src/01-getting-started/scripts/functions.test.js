import functions from './functions'

test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("negative"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    expect(functions.size(2000000)).toBe("extra large");
    expect(functions.size(101)).toBe("extra large");
});

test('Does that add function work?', () => {
    expect(functions.add(1,2)).toBe(3);
    expect(functions.add(101,202)).toBe(303);
});

test('Does that subtract function work?', () => {
    expect(functions.subtract(5,3)).toBe(2);
    expect(functions.subtract(101,202)).toBe(-101);
});

test('Does that multiply function work?', () => {
    expect(functions.multiply(2,3)).toBe(6);
    expect(functions.multiply(11,0)).toBe(0);
});

test('Does that divide function work?', () => {
    expect(functions.divide(10,5)).toBe(2);
    expect(functions.divide(7,2)).toBe(3.5);
});