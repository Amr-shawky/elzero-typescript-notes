"use strict";
function add04(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
function operate(a, b, operation) {
    return operation(a, b);
}
let resultAdd = operate(5, 10, add04);
let resultMultiply = operate(5, 10, multiply);
console.log(`Addition Result: ${resultAdd}`);
console.log(`Multiplication Result: ${resultMultiply}`);
//# sourceMappingURL=task4.js.map