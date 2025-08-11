let add = require("./add-string-numbers");
describe('String Calculator (Steps 1–4)', () => {
    // Step 1: simplest cases
    test('returns 0 for an empty string', () => {
      expect(add("")).toBe(0);
    });
  
    test('returns the number itself for a single value', () => {
      expect(add("5")).toBe(5);
    });
  
    test('returns the sum of two numbers', () => {
      expect(add("3,6")).toBe(9);
    });
  
    // Step 2: unknown amount of numbers
    test('handles an unknown amount of numbers', () => {
      expect(add("1,2,3,4")).toBe(10);
      expect(add("10,20,30,40,50")).toBe(150);
    });
  
    // A tiny bit of robustness (still within the spirit of the kata)
    test('ignores surrounding whitespace around numbers', () => {
      expect(add(" 1 , 2 , 3 ")).toBe(6);
    });
  
    // Step 3: ignore big numbers
    test('ignores numbers greater than 1000', () => {
      expect(add("2,1001")).toBe(2);
      expect(add("1000,2")).toBe(1002); // 1000 is allowed
      expect(add("999,1000,1001,5")).toBe(2004);
    });
  
    // Step 4: negatives throw with all negatives listed
    test('throws an error when a single negative number is present', () => {
      expect(() => add("1,4,-1")).toThrowError("negatives not allowed: -1");
    });
  
    test('throws an error listing all negative numbers when multiple are present', () => {
      expect(() => add("2,-4,3,-5,-7")).toThrowError("negatives not allowed: -4,-5,-7");
    });
  });