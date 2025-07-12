/**
 * This file demonstrates type annotations with multi-dimensional arrays in TypeScript.
 * - Arrays can contain numbers, strings, booleans, or even nested arrays.
 * - Use union types like: (number | string | string[])[]
 * - Nested arrays need explicit type declarations.
 * - If values are in the main array, just include the type directly (e.g., boolean).
 * - If the value is inside another array, use its type with brackets (e.g., string[]).
 */


// Basic arrays with specific types
let array1: number[] = [1, 2, 3];
let array2: string[] = ["e", "b", "c"];

// Mixed-type array
let array3: (string | number)[] = [1, 2, 3, "a", "b"];

// Array with nested string array
let array4: (number | string | string[])[] = [
  1,
  "a",
  ["c", "d"] // ✅ string[]
];

// Nested array of booleans
let array5: boolean[][] = [
  [true, false],
  [false, true]
];

// If boolean values are in main array:
let array6: (string | number | boolean)[] = [
  "a",
  1,
  true,
  false
];

// Mix of primitive types and nested string array
let complexArray: (string | number | boolean | string[])[] = [
  "hello",
  42,
  false,
  ["nested", "array"]
];
