"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let users = [
    {
        id: 1,
        name: "Alice",
        location: { x: 10, y: 20 },
        email: "alice@example.com"
    },
    {
        id: 2,
        name: "Bob",
        location: { x: 30, y: 40 }
    }
];
function findUserById(id, users) {
    return users.find(user => user.id === id);
}
function updateUserLocation(id, newCoordinates, users) {
    const user = findUserById(id, users);
    if (user) {
        user.location = newCoordinates;
        return true;
    }
    return false;
}
let user = findUserById(1, users);
console.log(user);
let updated = updateUserLocation(1, { x: 50, y: 60 }, users);
console.log(updated);
//# sourceMappingURL=task5.js.map