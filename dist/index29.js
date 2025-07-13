"use strict";
class User29 {
    constructor(username, salary) {
        this._username = username;
        this.salary = salary;
    }
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
    message() {
        return `Hello ${this._username}, your salary is ${this.salary}`;
    }
}
let user29 = new User29("Elzero", 6000);
console.log(user29.username);
user29.username = "Ahmed";
console.log(user29.username);
console.log(user29.message());
//# sourceMappingURL=index29.js.map