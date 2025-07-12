/**
 * This file demonstrates TypeScript type annotations.
 * - Explicitly set variable types to catch errors early.
 * - Use 'any' when the data type is unknown (not recommended).
 * - Type annotations in functions help prevent logic bugs like JS concatenation.
 * - TypeScript improves code safety and clarity with static typing.
 */

// Type Annotations in TypeScript

// Define variable types explicitly
let name1: string = "Zeinab";
let age: number = 30;
let higher: boolean = true;

// Changing type later causes error
// name = 5; // ❌ Error: number is not assignable to string

// TypeScript can infer types if not explicitly provided
let user = "zero"; // inferred as string
// user = 0; // ❌ Error

// Use 'any' type if the data type is unknown
let all: any;
all = "Zero Web School";
all = 100; // ✅ No problem

// JavaScript function without types can cause issues
// function addJS(n1, n2) {
//   return n1 + n2; // might result in concatenation
// }
// console.log(addJS(10, "20")); // "1020"
//
// TypeScript function with annotations avoids this
function addTS(n1: number, n2: number): number {
  return n1 + n2;
}
// console.log(addTS(10, "20")); // ❌ Error
console.log(addTS(10, 20)); // ✅ 30
