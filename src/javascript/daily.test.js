import {assertEquals} from './daily'

test('Compare the parameters', () => {
    expect(assertEquals("a","b")).toBe(false);
    expect(assertEquals("a","a")).toBe(true);
    expect(assertEquals(1,2)).toBe(false);
    expect(assertEquals(2,2)).toBe(true);
    expect(assertEquals("2",2)).toBe(false);
    expect(assertEquals("This value","This value")).toBe(true);
});

