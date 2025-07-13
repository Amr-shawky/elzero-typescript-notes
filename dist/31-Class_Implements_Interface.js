"use strict";
class User31 {
    constructor(username, sim, font) {
        this.username = username;
        this.sim = sim;
        this.font = font;
    }
    save() {
        console.log("Saved");
    }
    update() {
        console.log("Updated");
    }
}
let user31 = new User31("Elzero", true, "Open Sans");
console.log(user31.username);
console.log(user31.font);
user31.save();
user31.update();
//# sourceMappingURL=31-Class_Implements_Interface.js.map