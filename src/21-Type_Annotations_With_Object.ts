/**
 * Demonstrates how to add type annotations to an object in TypeScript.
 * - Shows nested objects, readonly properties, and optional properties.
 * - Useful for ensuring data structure consistency and safety.
 */

let myObject: {
  readonly username: string;
  id: number;
  hired?: boolean;
  skills: {
    one: string;
    two: string;
  };
} = {
  username: "Elzero",
  id: 100,
  hired: true,
  skills: {
    one: "HTML",
    two: "CSS"
  }
};

// Update values
myObject.id = 101;
myObject.hired = false;

// Print values
console.log(myObject.username);     // "Elzero"
console.log(myObject.id);           // 101
console.log(myObject.hired);        // false
console.log(myObject.skills.one);   // "HTML"

// Another object without `hired`
let anotherObject: {
  username: string;
  id: number;
  hired?: boolean;
  skills: {
    one: string;
    two: string;
  };
} = {
  username: "Ahmed",
  id: 150,
  skills: {
    one: "JS",
    two: "TS"
  }
};

console.log(anotherObject.username);     // "Ahmed"
console.log(anotherObject.skills.two);   // "TS"
