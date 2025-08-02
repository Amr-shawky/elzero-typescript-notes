// ### **Task 5 – Combine & Work with Data**

// 1. Create an array of `User` objects (from Task 3).
// 2. Write a function `findUserById` that accepts a user id (number or string) and the array, and returns the matching user.
// 3. Write another function `updateUserLocation` that accepts a user id and new coordinates, and updates the user’s location.

// task 5 solution
import { User03, Coordinates } from "./task3";

let users: User03[] = [
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

function findUserById(id: number | string, users: User03[]): User03 | undefined {
    return users.find(user => user.id === id);
}

function updateUserLocation(id: number | string, newCoordinates: Coordinates, users: User03[]): boolean {
    const user = findUserById(id, users);
    if (user) {
        user.location = newCoordinates;
        return true;
    }
    return false;
}

// Example usage
let user = findUserById(1, users);
console.log(user); // Output: { id: 1, name: 'Alice', location: { x: 10, y: 20 }, email: 'alice@example.com' }

let updated = updateUserLocation(1, { x: 50, y: 60 }, users);
console.log(updated); // Output: true
// console.log(users[0]); // Output: { id: 1, name: 'Alice', location: { x: 50, y: 60 }, email: 'alice@example.com' }
