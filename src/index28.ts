/**
 * This lesson covers:
 * - Access Modifiers (public, private, protected)
 * - Readonly modifier
 * - Parameter Properties for shorthand declarations
 * - JavaScript output behavior after TypeScript compilation
 * - Modern ECMAScript private fields using #
 */

class User28 {
  constructor(
    private username: string,
    protected salary: number,
    public readonly address: string
  ) {}

  message = (): string => {
    return `Hello ${this.username}, your salary is ${this.salary}`;
  };

  sayMessage(): string {
    return this.message();
  }
}

let user28 = new User28("Elzero", 6000, "Ismailia, Ground Floor");
console.log(user28.sayMessage()); // Hello Elzero, your salary is 6000
console.log(user28.address);      // Ismailia, Ground Floor
