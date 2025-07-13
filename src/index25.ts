/**
 * Demonstrates how to extend interfaces in TypeScript.
 * - `Moderator` extends `User`, adding a new `role` property.
 * - `Admin` extends both `User` and `Moderator`, and adds `protect`.
 * - `extends` provides reusable and modular interface design.
 */

interface User3 {
  id: number;
  username: string;
  country: string;
}

interface Moderator extends User3 {
  role: string | number;
}

interface Admin extends User3, Moderator {
  protect?: boolean;
}

let adminUser: Admin = {
  id: 1,
  username: "Amr",
  country: "Egypt",
  role: "moderator",
  protect: true,
};

console.log(adminUser);
