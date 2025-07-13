"use strict";
let user2 = {
    id3: 100,
    username: "Elzero",
    country: "Egypt",
    sayHello() {
        return `Hello ${this.username}`;
    },
    sayWelcome: () => {
        return `Welcome ${user2.username}`;
    },
    getDouble(n) {
        return n * 2;
    }
};
console.log(user2.id3);
console.log(user2.sayHello());
console.log(user2.sayWelcome());
console.log(user2.getDouble(100));
//# sourceMappingURL=index23.js.map