/**
 * Demonstrates use of multiple generic types in TypeScript.
 * - Enables defining flexible functions that accept multiple types.
 * - Supports arrow function syntax.
 * - Shows that return type doesn't have to match the input type.
 */

// Arrow Function with one generic type
const testType = <T>(value: T): string => {
  return `The value is ${value} and the type is ${typeof value}`;
};

console.log(testType("Elzero"));   // The value is Elzero and the type is string
console.log(testType(100));        // The value is 100 and the type is number
console.log(testType(true));       // The value is true and the type is boolean

// Function with multiple generic types
const multipleTypes = <T, S>(value1: T, value2: S): string => {
  return `The first value is ${value1}, and the second value is ${value2}`;
};

console.log(multipleTypes<string, number>("Osama", 100));
// The first value is Osama, and the second value is 100

console.log(multipleTypes<string, boolean>("Elzero", true));
// The first value is Elzero, and the second value is true
