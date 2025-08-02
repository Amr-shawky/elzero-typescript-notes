// ### **Task 4 – Function Types**

// 1. Create a function type alias `MathOp` that represents a function taking **two numbers** and returning a number.
// 2. Implement two functions using `MathOp`:
//     - `add` (sum of two numbers)
//     - `multiply` (product of two numbers)
// 3. Create a function `operate` that takes:
//     - Two numbers
//     - A `MathOp` function
        
//         And returns the result of applying the function.

// task 4 solution
type MathOp = (a: number, b: number) => number;
function add04(a: number, b: number): number {
    return a + b;
}
function multiply(a: number, b: number): number {
    return a * b;
}
function operate(a: number, b: number, operation: MathOp): number {
    return operation(a, b);
}
// Example usage
let resultAdd = operate(5, 10, add04); // Output: 15
let resultMultiply = operate(5, 10, multiply); // Output: 50
console.log(`Addition Result: ${resultAdd}`); // Output: Addition Result: 15
console.log(`Multiplication Result: ${resultMultiply}`); // Output: Multiplication Result: 50