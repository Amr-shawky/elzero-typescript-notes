/**
 * Demonstrates usage of optional and default parameters in TypeScript:
 * - Default values can be assigned like: param: string = "default"
 * - Optional parameters are marked with `?` like: param?: number
 * - Required parameters must come before optional ones.
 * - If you pass `undefined`, the default value is used.
 */

// Function with required, optional and default parameters
function showData(name: string = "Unknown", age?: number, country?: string): string {
  return `${name} - ${age} - ${country}`;
}

console.log(showData()); 
// Output: Unknown - undefined - undefined

console.log(showData("Osama", 40)); 
// Output: Osama - 40 - undefined

console.log(showData(undefined, 40, "Egypt")); 
// Output: Unknown - 40 - Egypt

// ❌ Incorrect: required after optional
// function invalidFunc(name?: string, age: number) { ... }
