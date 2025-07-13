/**
 * Literal Types restrict the allowed values to a fixed set.
 * In this example, the function is guaranteed to return only 0, 1, or -1.
 * Useful when you want to enforce strict return values or input values.
 */


// Define a Literal Type that only allows 0, 1, or -1
type CompareResult = 0 | 1 | -1;

/**
 * Compare two numbers and return:
 * - 0 if equal
 * - 1 if num1 > num2
 * - -1 if num1 < num2
 */
function compare1(num1: number, num2: number): CompareResult {
  if (num1 === num2) return 0;
  else if (num1 > num2) return 1;
  else return -1;
}

// Test the function
console.log(compare1(20, 20));  // Output: 0
console.log(compare1(20, 15));  // Output: 1
console.log(compare1(20, 30));  // Output: -1


// You can only assign 0, 1, or -1 to this variable
let myResult: CompareResult;

myResult = 1;     // ✅ OK
myResult = -1;    // ✅ OK
myResult = 0;     // ✅ OK
//myResult = 100;   // ❌ Error: Type '100' is not assignable to type 'CompareResult'



// result on console
// 0
// 1
// -1
