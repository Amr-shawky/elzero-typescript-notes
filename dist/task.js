"use strict";
let userId;
let isLoggedIn;
function printId(id) {
    if (typeof id === "number") {
        console.log(`ID is number: ${id}`);
    }
    else {
        console.log(`ID is string: ${id}`);
    }
}
printId(123);
printId("abc123");
//# sourceMappingURL=task.js.map