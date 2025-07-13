/**
 * This example demonstrates advanced usage of Type Alias in TypeScript.
 * - We define a type alias called `Buttons` with 4 required string properties.
 * - We then define another type alias `Last` that extends `Buttons` and adds an extra boolean field `x`.
 * - This is useful when working with reusable structures and expanding them when needed.
 */


// Basic type alias for button actions
type Buttons = {
  up: string;
  right: string;
  down: string;
  left: string;
};

// Function that uses Buttons type
function getActions(btns: Buttons) {
  console.log("Action for Button Up is:", btns.up);
  console.log("Action for Button Right is:", btns.right);
  console.log("Action for Button Down is:", btns.down);
  console.log("Action for Button Left is:", btns.left);
}

// Call the function with an object of type Buttons
getActions({
  up: "Jump",
  right: "Go Right",
  down: "Go Down",
  left: "Go Left"
});




// Extend the Buttons type with new property x (a boolean)
type Last = Buttons & {
  x: boolean;
};

// Example function using the extended type
function getAdvancedActions(btns: Last) {
    getActions(btns); // Reuse the previous function
  console.log("Is Button X Active?", btns.x);
}

// Use the extended type
getAdvancedActions({
  up: "Go Up",
  right: "Go Right",
  down: "Go Down",
  left: "Go Left",
  x: true
  //x: "yes" // ❌ خطأ لأن x لازم تكون boolean
 // x: true  // ✅ صح
});

// * Action for Button Up is: Go Up
// * Action for Button Right is: Go Right
// * Action for Button Down is: Go Down
// * Action for Button Left is: Go Left
// * Is Button X Active? true

