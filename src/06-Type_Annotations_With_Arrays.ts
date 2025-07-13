/**
 * Demonstrates type annotations with variables and arrays in TypeScript.
 * - TypeScript infers types if no annotation is provided.
 * - Use union types like (string | number) to allow multiple types.
 * - Arrays can be restricted to specific types using: string[]
 * - Mixing types in arrays causes issues with string-specific methods like .repeat()
 * - Annotating array elements prevents runtime errors and improves code safety.
 */
// Type inferred as string
let all0 = "zero";

// Type inferred as any
let all2;
all2 = "e";     // ✅ string
all2 = 100;     // ✅ number
all2 = true;    // ✅ boolean

// Allow only string and number
let mix: string | number;
mix = "hello";  // ✅
mix = 42;       // ✅
//mix = false;    // ❌

// Array with inferred type
let myFriends = ["Osama", "Ahmed", "Sayed"];
//myFriends.push(10); // Now it's (string | number)[]

// Problem with string method on number
for (let i = 0; i < myFriends.length; i++) {
  // console.log(myFriends[i].repeat(3)); // ❌ Error if element is number
}

// Fix: Explicitly define as string array
let myFriendsClean: string[] = ["Osama", "Ahmed", "Sayed"];
// myFriendsClean.push(10); // ❌ Error
for (let i = 0; i < myFriendsClean.length; i++) {
  console.log(myFriendsClean[i].repeat(3)); // ✅ Works fine
}
