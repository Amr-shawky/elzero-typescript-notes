"use strict";
class User36 {
    constructor(value) {
        this.value = value;
    }
    show(message) {
        console.log(message);
        console.log(this.value);
    }
}
const user36 = new User36("Elzero");
user36.show("Message");
const user36_2 = new User36(100);
user36_2.show("Number ID");
const user36_3 = new User36(100);
user36_3.show("Mixed type allowed");
//# sourceMappingURL=36-Generics_Classes.js.map