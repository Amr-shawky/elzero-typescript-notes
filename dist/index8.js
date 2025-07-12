"use strict";
let showMessage = true;
function showDetails(name, age, salary) {
    if (showMessage) {
        return `Hello ${name}, Age is ${age}, Salary is ${salary}`;
    }
    return "No data to show";
}
console.log(showDetails("Osama", 40, 5000));
function testFunc() {
    let test = 10;
    console.log("Test");
}
function testFunc2(a, b) {
    console.log(a);
}
function brokenFunc() {
    return "This is fine";
}
//# sourceMappingURL=index8.js.map