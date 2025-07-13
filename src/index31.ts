/**
 * This lesson explains how to implement an interface in a TypeScript class.
 * - Interface defines required structure: properties and methods
 * - Class uses `implements` keyword to adhere to the interface
 * - Optional properties (with `?`) can be omitted
 */

interface Settings31 {
  sim: boolean;
  font?: string;
  save(): void;
}

class User31 implements Settings31 {
  constructor(
    public username: string,
    public sim: boolean,
    public font: string
  ) {}

  save(): void {
    console.log("Saved");
  }

  update(): void {
    console.log("Updated");
  }
}

let user31 = new User31("Elzero", true, "Open Sans");

console.log(user31.username); // Elzero
console.log(user31.font);     // Open Sans
user31.save();                // Saved
user31.update();              // Updated
