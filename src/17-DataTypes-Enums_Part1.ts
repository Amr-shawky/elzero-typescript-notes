/**
 * Enums in TypeScript allow defining a set of named constants.
 * Useful for grouping related constant values like game levels, roles, currencies, etc.
 * They can be numeric (default), string-based, or mixed.
 * This example demonstrates using enums for game levels and mapping names to values.
 */

// Define enum for game levels
enum Level {
  Kids = 15,
  Easy = 9,
  Medium = 6,
  Hard = 3
}

// Simulated user selection (this would normally come from UI input)
let selectedLevel: string = "Easy";

// Check selected level and print the corresponding seconds
if (selectedLevel === "Kids") {
  console.log(
    `The level is ${selectedLevel} and the number of seconds is ${Level.Kids}`
  );
} else if (selectedLevel === "Easy") {
  console.log(
    `The level is ${selectedLevel} and the number of seconds is ${Level.Easy}`
  );
} else if (selectedLevel === "Medium") {
  console.log(
    `The level is ${selectedLevel} and the number of seconds is ${Level.Medium}`
  );
} else if (selectedLevel === "Hard") {
  console.log(
    `The level is ${selectedLevel} and the number of seconds is ${Level.Hard}`
  );
} else {
  console.log("Invalid level selected");
}
