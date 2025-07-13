/**
 * Demonstrates how to add methods and parameters in TypeScript interfaces.
 * - Supports both function and arrow syntax.
 * - Allows method parameters.
 * - Shows correct usage of 'this' context.
 */

interface User1 {
  id3: number;
  username: string;
  country: string;

  sayHello(): string;
  sayWelcome: () => string;
  getDouble(num: number): number;
}

let user2: User1 = {
  id3: 100,
  username: "Elzero",
  country: "Egypt",

  sayHello() {
    return `Hello ${this.username}`;
  },

  sayWelcome: () => {
    return `Welcome ${user2.username}`;
  },

  getDouble(n: number) {
    return n * 2;
  }
};

console.log(user2.id3); // 100
console.log(user2.sayHello()); // Hello Elzero
console.log(user2.sayWelcome()); // Welcome Elzero
console.log(user2.getDouble(100)); // 200
