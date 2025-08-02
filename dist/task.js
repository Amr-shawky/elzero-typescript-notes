"use strict";
let userId;
let isLoggedIn;
function printId4(id) {
    if (typeof id === "number") {
        console.log(`ID is number: ${id}`);
    }
    else {
        console.log(`ID is string: ${id}`);
    }
}
printId4(123);
printId4("abc123");
//# sourceMappingURL=task.js.map