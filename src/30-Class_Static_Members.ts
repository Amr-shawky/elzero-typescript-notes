/**
 * This lesson demonstrates how to use static members in TypeScript classes.
 * - static properties belong to the class, not instances
 * - static methods access static data using class name or 'this'
 * - encapsulate static properties using private + getters
 */

class User {
  private static _created: number = 0;

  constructor(public username: string) {
    User._created++;
  }

  static getCount(): void {
    console.log(`${User._created} objects created`);
  }

  static get created(): number {
    return User._created;
  }
}

let u1 = new User("Elzero");
let u2 = new User("Web");
let u3 = new User("School");

User.getCount();              // 3 objects created
console.log(User.created);    // 3
