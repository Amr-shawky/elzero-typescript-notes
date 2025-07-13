/**
 * Demonstrates Type Assertions in TypeScript.
 * - Allows forcing the compiler to treat a variable as a specific type.
 * - Use `as Type` to assert the type.
 * - Useful when the compiler can't infer types correctly.
 * - No type checking happens after assertion.
 * - Be cautious: assertions can lead to runtime errors.
 */

// Example: DOM Element - image
let myImage = document.getElementById("my-img") as HTMLImageElement;

// Valid property
console.log(myImage.src); // ✅

// Invalid property → Uncommenting below line will cause TS error
// console.log(myImage.value); // ❌ Property 'value' does not exist on type 'HTMLImageElement'

// Another example with input
let myInput = document.getElementById("my-input") as HTMLInputElement;
let myInput2 = <HTMLInputElement>document.getElementById("my-input2");
// Valid properties
console.log(myInput.value); // ✅
console.log(myInput.src);   // ✅

// Invalid property → Uncommenting below line will cause TS error
// console.log(myInput.href); // ❌ Property 'href' does not exist on type 'HTMLInputElement'

// Type assertion with any
let data: any = 1000;

// Forced to string
let result = (data as string).repeat(3);

// Output
console.log(result); // ⚠️ Runtime error: repeat is not a function

// No TS error at compile time, but runtime will fail
