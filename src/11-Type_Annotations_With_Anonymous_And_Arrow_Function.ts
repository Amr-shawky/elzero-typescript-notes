/**
 * Type Annotations can be used with both anonymous and arrow functions.
 * 
 * Anonymous Function:
 * const add = function(num1: number, num2: number): number {
 *   return num1 + num2;
 * };
 * 
 * Arrow Function:
 * const addWithArrow = (num1: number, num2: number): number => num1 + num2;
 * 
 * - Each parameter is annotated with a type.
 * - The return type is also explicitly defined.
 */


// Anonymous Function
const add = function(num1: number, num2: number): number {
  return num1 + num2;
};
console.log(add(10, 20)); // 30

// Arrow Function
const addWithArrow = (num1: number, num2: number): number => num1 + num2;
console.log(addWithArrow(10, 20)); // 30
