/**
 * Demonstrates how to declare and use interfaces in TypeScript.
 * - Interfaces describe the shape of objects.
 * - Supports readonly and optional properties.
 * - Can be used in object creation and function parameters.
 */

interface User {
  readonly id?: number;
  username: string;
  country: string;
}

// Object using the interface
let user1: User = {
  id: 100,
  username: "Elzero",
  country: "Egypt"
};

// Modify allowed property
user1.country = "Syria";

// ❌ Cannot modify readonly property
// user1.username = "Osama";

// Function using interface as parameter
function getData(data: User) {
  console.log(`ID is ${data.id}`);
  console.log(`Username is ${data.username}`);
  console.log(`Country is ${data.country}`);
}

// Function call with object
getData({
  id: 200,
  username: "Osama",
  country: "KSA"
});
