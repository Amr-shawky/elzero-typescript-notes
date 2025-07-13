/**
 * Demonstrates polymorphism and method override in TypeScript.
 * - Base class defines a general method.
 * - Subclasses override the method with custom implementations.
 * - With "override" keyword, TypeScript checks for proper method overriding.
 */

class Player {
  constructor(public name: string) {}

  attack(): void {
    console.log("Attacking now!");
  }
}

class Amazon extends Player {
  constructor(name: string, public spears: number) {
    super(name);
  }

  override attack(): void {
    super.attack();
    console.log("Attacking with spears!");
    this.spears -= 1;
  }
}

class Barbarian extends Player {
  constructor(name: string, public axeDurability: number) {
    super(name);
  }

  override attack(): void {
    super.attack();
    console.log("Attacking with axe!");
    this.axeDurability -= 1;
  }
}

const bar1 = new Barbarian("Zero", 100);

console.log(bar1.name);             // Zero
console.log(bar1.axeDurability);    // 100
bar1.attack();                      // Attacking now! Attacking with axe!
console.log(bar1.axeDurability);    // 99
