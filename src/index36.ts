/**
 * Demonstrates the use of Generics with Classes in TypeScript.
 * - Supports passing any type to class via <T>.
 * - Makes class reusable for multiple types without using 'any'.
 * - Supports default type values.
 * - Allows type inference or explicit type declaration.
 */

class User36<T = string> {
  constructor(public value: T) {}

  show(message: string): void {
    console.log(message);
    console.log(this.value);
  }
}

// Example 1 - inferred type (string)
const user36 = new User36("Elzero");
user36.show("Message"); // Message \n Elzero

// Example 2 - explicit type (number)
const user36_2 = new User36<number>(100);
user36_2.show("Number ID"); // Number ID \n 100

// Example 3 - using union type
const user36_3 = new User36<number | string>(100);
user36_3.show("Mixed type allowed"); // Mixed type allowed \n 100

// Example 4 - default type
//const user36_4 = new User36(); // default is string
//user36_4.show("Default string"); // Default string \n undefined (no value passed)
