// ### **Task 1 – Primitive Types with Union**

// 1. Create a variable `userId` that can be **either a number or a string**.
// 2. Create a variable `isLoggedIn` that must be a boolean.
// 3. Write a function `printId` that accepts `userId` and prints:
//     - `"ID is number: <id>"` if it’s a number
//     - `"ID is string: <id>"` if it’s a string

// task 1 solution
let userId: number | string;
let isLoggedIn: boolean;

function printId4(id: number | string) {
    if (typeof id === "number") {
        console.log(`ID is number: ${id}`);
    } else {
        console.log(`ID is string: ${id}`);
    }
}
// Example usage
printId4(123); // Output: ID is number: 123
// Example usage
printId4("abc123"); // Output: ID is string: abc123

