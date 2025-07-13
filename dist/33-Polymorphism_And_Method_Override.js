"use strict";
class Player {
    constructor(name) {
        this.name = name;
    }
    attack() {
        console.log("Attacking now!");
    }
}
class Amazon extends Player {
    constructor(name, spears) {
        super(name);
        this.spears = spears;
    }
    attack() {
        super.attack();
        console.log("Attacking with spears!");
        this.spears -= 1;
    }
}
class Barbarian extends Player {
    constructor(name, axeDurability) {
        super(name);
        this.axeDurability = axeDurability;
    }
    attack() {
        super.attack();
        console.log("Attacking with axe!");
        this.axeDurability -= 1;
    }
}
const bar1 = new Barbarian("Zero", 100);
console.log(bar1.name);
console.log(bar1.axeDurability);
bar1.attack();
console.log(bar1.axeDurability);
//# sourceMappingURL=33-Polymorphism_And_Method_Override.js.map