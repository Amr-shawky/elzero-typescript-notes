// - 

// ---

// ### **Task 3 – User03-Defined Types (Interface & Type Alias)**

// 1. Create a **type alias** `Coordinates` for an object with `x` and `y` numbers.
// 2. Create an **interface** `User03` with:
//     - `id` (number)
//     - `name` (string)
//     - `location` (of type `Coordinates`)
//     - an optional property `email` (string)
// 3. Create a function `printUser03` that accepts a `User03` and prints its data.

// task 3 solution
// exporting all types and interfaces for use in other files
export { Coordinates, User03, printUser03 };

type Coordinates = {
    x: number;
    y: number;
};

interface User03 {
    id: number;
    name: string;
    location: Coordinates;
    email?: string;
}

function printUser03(user03: User03) {
    console.log(`ID: ${user03.id}`);
    console.log(`Name: ${user03.name}`);
    console.log(`Location: (${user03.location.x}, ${user03.location.y})`);
    if (user03.email) {
        console.log(`Email: ${user03.email}`);
    }
}
// Example usage
let user03: User03 = {
    id: 1,
    name: "Alice",
    location: { x: 10, y: 20 },
    email: "alice@example.com"
};
printUser03(user03);
// Example usage
let user03WithoutEmail: User03 = {
    id: 2,
    name: "Bob",
    location: { x: 30, y: 40 }
};
printUser03(user03WithoutEmail); // Output: ID: 2, Name: Bob, Location: (30, 40)