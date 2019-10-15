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

test('Does the tax function work?', () => {
    expect(functions.tax(-100)).toBe(0);
    expect(functions.tax(1.00)).toBe(0.15);
    expect(functions.tax(2.00)).toBe(0.30);
    expect(functions.tax(50000)).toBe(7630.85);
    expect(functions.tax(100000)).toBe(18140.66);
    expect(functions.tax(150000)).toBe(31211.57);
    expect(functions.tax(250000)).toBe(61796.57);
});