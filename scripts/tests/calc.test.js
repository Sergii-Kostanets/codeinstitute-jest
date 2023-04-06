/**
 * @jest-environment jsdom
 */

const addition = require('../calc.js');

describe ("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 44 for 22 + 22", () => {
            expect(addition(22, 22)).toBe(44);
        });
        test("should return 'Provide two numbers' for 22 + hello", () => {
            expect(addition(22, 'hello')).toBe('Provide two numbers');
        });
        test("should return 'Provide two numbers' for 22", () => {
            expect(addition(22)).toBe('Provide two numbers');
        });
        test("should return 'Provide two numbers' for hello + 22", () => {
            expect(addition(22, 'hello')).toBe('Provide two numbers');
        });
        test("should return 'Provide two numbers' for ()", () => {
            expect(addition()).toBe('Provide two numbers');
        });
        test("should return 'Provide two numbers' for Hello", () => {
            expect(addition('Hello')).toBe('Provide two numbers');
        });
        test("should return 'Provide two numbers' for Hello + World", () => {
            expect(addition('Hello', 'World')).toBe('Provide two numbers');
        });
        test("should return 'Provide two numbers' for null + null", () => {
            expect(addition(null, null)).toBe('Provide two numbers');
        });
        test("should return 'Provide two numbers' for 22 + null", () => {
            expect(addition(22, null)).toBe('Provide two numbers');
        });
        test("should return 'Provide two numbers' for undefined + undefined", () => {
            expect(addition(undefined, undefined)).toBe('Provide two numbers');
        });
        test("should return 'Provide two numbers' for 22 + undefined", () => {
            expect(addition(22, undefined)).toBe('Provide two numbers');
        });
        test("should return 44.44 for 22.22 + 22.22", () => {
            expect(addition(22.22, 22.22)).toBe(44.44);
        });
        test("should return -11.11 for -22.22 + 11.11", () => {
            expect(addition(-22.22, 11.11)).toBe(-11.11);
        });
    });
    describe("Subtraction function", () => {
        
    });
    describe("Multiply function", () => {

    });
    describe("Division function", () => {

    });
});