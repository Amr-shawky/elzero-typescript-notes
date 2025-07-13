/**
 * Demonstrates advanced usage of enums in TypeScript.
 * - Enums can reference values from other enums.
 * - You can compute enum values using expressions or functions.
 * - const enums allow inline substitution at compile time.
 * - TSConfig option `preserveConstEnums` controls whether const enums appear in output JS.
 */

// Another enum used for referencing
enum Kids {
  Five = 25,
  Seven = 20,
  Ten = 15
}

// Function to be used in enum value
function getHardLevel(): number {
  return 3;
}

// Main enum using references and function values
 enum Level1 {
  Kid = Kids.Ten,         // Refer to value from another enum (15)
  Easy = 9,
  Medium = Easy - 3,       // Arithmetic operation inside enum (6)
  Hard = getHardLevel(),   // Function call (3)
  Insane = 1               // Required because other members have initializers
}

// Selected level
let selectedLevel1: string = "Hard";

// Output based on selected level
if (selectedLevel1 === "Hard") {
  console.log(
    `The level is ${selectedLevel1} and the number of seconds is ${Level1.Hard}`
  );
} else if (selectedLevel1 === "Medium") {
  console.log(
    `The level is ${selectedLevel} and the number of seconds is ${Level1.Medium}`
  );
} else if (selectedLevel1 === "Kid") {
  console.log(
    `The level is ${selectedLevel1} and the number of seconds is ${Level1.Kid}`
  );
} else {
  console.log("Invalid level selected");
}
