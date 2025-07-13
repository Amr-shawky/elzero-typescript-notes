"use strict";
class Food {
    constructor(title) {
        this.title = title;
    }
}
class Pizza extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
        console.log("Cooking Time for Pizza is 1 Hour");
    }
}
class Burger extends Food {
    constructor(title, price, location) {
        super(title);
        this.price = price;
        this.location = location;
    }
    getCookingTime() {
        console.log("Cooking Time for Burger is Half Hour");
    }
}
const pizza1 = new Pizza("Awesome Pizza", 100);
console.log(pizza1.title);
console.log(pizza1.price);
pizza1.getCookingTime();
//# sourceMappingURL=32-Abstract_Classes_And_Members.js.map