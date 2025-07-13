/**
 * Demonstrates the use of Rest Parameters with TypeScript:
 * - Accepts any number of numeric arguments via `...nums: number[]`
 * - Performs summation using either for-loop or forEach
 * - Supports all number types (integers, floats)
 * - Throws error if argument type is not a number (e.g., boolean)
 * - Can convert boolean to number using +true (1)
 */

function addAll(...nums: number[]): number {
  let result = 0;
  nums.forEach(num => {
    result += num;
  });
  return result;
}

console.log(addAll(10, 20, 30, 100, 10.5, +true)); // Output: 171.5
