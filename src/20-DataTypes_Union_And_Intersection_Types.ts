/**
 * Demonstrates Union (`|`) and Intersection (`&`) Types in TypeScript.
 * - Union: variable can be one of multiple types.
 * - Intersection: combines multiple types into one, requiring all properties.
 * - Useful for combining reusable type aliases.
 */
/**
 * Demonstrates Union (`|`) and Intersection (`&`) Types in TypeScript.
 * - Union: variable can be one of multiple types.
 * - Intersection: combines multiple types into one, requiring all properties.
 * - Useful for combining reusable type aliases.
 */

// Union Example
let all7: number | string;

all7 = 100;       // ✅
all7 = "string";  // ✅
//all7 = true;      // ❌ Error

// Type A
type A = {
  one: string;
  two: number;
  three: boolean;
};

// Type C
type C = {
  five: boolean;
};

// Intersection Type
type Mix = A & C;

// Function using A
function getActions1(patterns: A) {
  console.log(`Hello ${patterns.one}, ${patterns.two}, ${patterns.three}`);
}

// Call function
getActions1({
  one: "string",
  two: 100,
  three: true
});

// Function using Mix
function getMixData(data: Mix) {
  console.log(`One: ${data.one}, Two: ${data.two}, Three: ${data.three}, Five: ${data.five}`);
}

// Call function with mix of A & C
getMixData({
  one: "Union",
  two: 200,
  three: false,
  five: true
});


