/**
 * Tuple Types in TypeScript allow defining a fixed structure for arrays.
 * Each element in the tuple has a specific type and position.
 * Useful when working with structured data like records or rows.
 * 
 * In this example:
 * - The tuple [number, string, boolean] represents an article.
 * - 'readonly' keyword can be used to prevent modifications like push().
 * - Destructuring helps extract individual values from the tuple easily.
 */


// ✅ Define a tuple: [number, string, boolean]
let article: [number, string, boolean] = [11, "Title 1", true];

// ✅ Update the tuple with new values
article = [12, "Title 2", false];

// ✅ Log the whole tuple to the console
console.log(article); // Output: [12, "Title 2", false]

// ✅ You can push new values to a regular tuple
article.push(100); // This works even though it's not part of the original structure

// ✅ Log updated tuple
console.log(article); // Output: [12, "Title 2", false, 100]

// ✅ Make the tuple read-only to prevent adding new items
let fixedArticle: readonly [number, string, boolean] = [33, "Title ReadOnly", true];

// ❌ This will cause an error because the tuple is readonly
// fixedArticle.push(500); // Error: Property 'push' does not exist on type 'readonly [...]'

// ✅ Destructure tuple values into separate variables
const [id, title, published] = article;

// ✅ Log individual values
console.log(id);        // Output: 12
console.log(title);     // Output: "Title 2"
console.log(published); // Output: false
