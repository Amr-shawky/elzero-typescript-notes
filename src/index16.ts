/**
 * Demonstrates the difference between `void` and `never` return types in TypeScript.
 *
 * - `void`: Used when a function doesn't return any value.
 * - `never`: Used when a function never returns (e.g., throws an error or has an infinite loop).
 * - TypeScript helps detect unreachable code with `allowUnreachableCode: false`.
 */


// ✅ Function with void return type
function logMessage(message: string): void {
  console.log(message);
  // return message; // ❌ Error: Type 'string' is not assignable to type 'void'
}

// ✅ Function with never return type (throws error)
function throwError(message: string): never {
  throw new Error(message);
}

// ✅ Function with never return type (infinite loop)
function alwaysLog(name: string): never {
  while (true) {
    console.log(name);
  }
}

// ❌ Unreachable code detection
// console.log("This line will not run"); // Error if written after a never-returning function
