/**
 * Demonstrates function input/output type annotations in TypeScript.
 * - Functions must declare parameter types and return types.
 * - TSConfig options like `noImplicitAny`, `noImplicitReturns`, `noUnusedLocals`, and `noUnusedParameters`
 *   help detect issues early.
 * - Quick Fix can suggest inferred types.
 * - Ensures all paths return a value if expected.
 * - Keeps your code safe and clean.
 */

// TSConfig options recommended:
// "noImplicitAny": true,
// "noImplicitReturns": true,
// "noUnusedLocals": true,
// "noUnusedParameters": true

let showMessage = true;

// Function with parameter types and return type
function showDetails(name: string, age: number, salary: number): string {
  if (showMessage) {
    return `Hello ${name}, Age is ${age}, Salary is ${salary}`;
  }
  return "No data to show";
}

// Using the function
console.log(showDetails("Osama", 40, 5000)); // ✅

/* Unused variable warning (noUnusedLocals) */
function testFunc() {
  let test = 10; // ❌ Warning: declared but never used
  console.log("Test");
}

/* Unused parameter warning (noUnusedParameters) */
function testFunc2(a: number, b: number) {
  console.log(a); // ❌ Warning: b is never used
}

/* Return mismatch */
function brokenFunc(): string {
//  return 123; // ❌ Type 'number' is not assignable to type 'string'
return "This is fine"; // ✅ Corrected return type
}
