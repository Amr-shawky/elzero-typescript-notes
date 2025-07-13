/**
 * Demonstrates the use of generics in TypeScript.
 * - Allows writing reusable and type-safe functions.
 * - Avoids using `any` or writing multiple functions for each type.
 * - Works with custom types, arrays, objects, etc.
 */

function returnType<T>(value: T): T {
  return value;
}

// Auto inferred types
console.log(returnType(100));            // number
console.log(returnType("Frontend"));     // string
console.log(returnType(true));           // boolean

// Explicitly defined generic types
console.log(returnType<number>(123));         // number
console.log(returnType<string>("Elzero"));    // string
console.log(returnType<boolean>(false));      // boolean

// Generic with array
const numbers = [1, 2, 3, 4];
console.log(returnType<number[]>(numbers));   // number[]
