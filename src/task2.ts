
// ### **Task 2 – Complex Types (Arrays, Tuples, Nested Objects)**

// 1. Create an array of **usernames** (string array).
// 2. Create a tuple `httpResponse` which has:
//     - status code (number)
//     - message (string)
//     - success (boolean)
// 3. Create an array of objects `products`, where each product has:
//     - `id` (number)
//     - `name` (string)
//     - `price` (number)
//     - `tags` (array of strings

//task 2 solution
let usernames: string[] = ["alice", "bob", "charlie"];
let httpResponse: [number, string, boolean] = [200, "OK", true];
let products: { id: number; name: string; price: number; tags: string[] }[] = [
    { id: 1, name: "Laptop", price: 999.99, tags: ["electronics", "computers"] },
    { id: 2, name: "Smartphone", price: 499.99, tags: ["electronics", "mobile"] },
    { id: 3, name: "Book", price: 19.99, tags: ["literature", "education"] }
];
// Example usage
console.log(usernames); // Output: ["alice", "bob", "charlie"]
console.log(httpResponse); // Output: [200, "OK", true]
console.log(products); // Output: Array of product objects