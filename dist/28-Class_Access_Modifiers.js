"use strict";
class User28 {
    constructor(username, salary, address) {
        this.username = username;
        this.salary = salary;
        this.address = address;
        this.message = () => {
            return `Hello ${this.username}, your salary is ${this.salary}`;
        };
    }
    sayMessage() {
        return this.message();
    }
}
let user28 = new User28("Elzero", 6000, "Ismailia, Ground Floor");
console.log(user28.sayMessage());
console.log(user28.address);
//# sourceMappingURL=28-Class_Access_Modifiers.js.map