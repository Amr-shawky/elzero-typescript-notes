/**
 * This lesson demonstrates how to use abstract classes and methods in TypeScript.
 * - Abstract classes cannot be instantiated directly.
 * - Abstract methods must be implemented by all subclasses.
 * - Common functionality can be shared via constructor and concrete methods.
 */

abstract class Food {
  constructor(public title: string) {}

  abstract getCookingTime(): void;
}

class Pizza extends Food {
  constructor(title: string, public price: number) {
    super(title);
  }

  getCookingTime(): void {
    console.log("Cooking Time for Pizza is 1 Hour");
  }
}

class Burger extends Food {
  constructor(title: string, public price: number, public location: string) {
    super(title);
  }

  getCookingTime(): void {
    console.log("Cooking Time for Burger is Half Hour");
  }
}

const pizza1 = new Pizza("Awesome Pizza", 100);

console.log(pizza1.title);       // Awesome Pizza
console.log(pizza1.price);       // 100
pizza1.getCookingTime();         // Cooking Time for Pizza is 1 Hour
