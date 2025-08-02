"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printUser03 = printUser03;
function printUser03(user03) {
    console.log(`ID: ${user03.id}`);
    console.log(`Name: ${user03.name}`);
    console.log(`Location: (${user03.location.x}, ${user03.location.y})`);
    if (user03.email) {
        console.log(`Email: ${user03.email}`);
    }
}
let user03 = {
    id: 1,
    name: "Alice",
    location: { x: 10, y: 20 },
    email: "alice@example.com"
};
printUser03(user03);
let user03WithoutEmail = {
    id: 2,
    name: "Bob",
    location: { x: 30, y: 40 }
};
printUser03(user03WithoutEmail);
//# sourceMappingURL=task3.js.map