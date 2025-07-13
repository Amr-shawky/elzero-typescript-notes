/**
 * This lesson covers:
 * - Get and Set accessors in TypeScript
 * - Using getters to read private properties
 * - Using setters to safely update private values
 * - Applying Encapsulation principles to class design
 */

class User29 {
  private _username: string;
  private salary: number;

  constructor(username: string, salary: number) {
    this._username = username;
    this.salary = salary;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  message(): string {
    return `Hello ${this._username}, your salary is ${this.salary}`;
  }
}

let user29 = new User29("Elzero", 6000);
console.log(user29.username);     // Elzero
user29.username = "Ahmed";
console.log(user29.username);     // Ahmed
console.log(user29.message());    // Hello Ahmed, your salary is 6000
