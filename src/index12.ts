/**
 * Type Alias lets you define a custom name for a type or a combination of types.
 * - Syntax: `type AliasName = type;`
 * - Useful for reusability and code clarity
 * 
 * Example:
 * type ST = string;
 * let name: ST = "Osama"; // Equivalent to string
 * 
 * You can also combine types:
 * type STAndNum = string | number;
 * let value: STAndNum = 100 or "Hello"; // Not boolean
 */
type ST = string;
let zName: ST = "Osama";

type STAndNum = string | number;
let all9: STAndNum = 10;
all9 = "Hello";
// all9 = true; // ❌ Error

type STAndNum2 = string & number; // ❌ Error, cannot combine string and number with '&'
type STAndNum3 = string | number | boolean; // Valid, can include boolean

type flags = "active" | "inactive" | "pending"; // String literal type
let status1: flags = "active"; // Valid
// status1 = "completed"; // ❌ Error, not part of the defined flags

type causes = 1 | 0 | -1; // Numeric literal type
let causes1: causes = 1; // Valid

function compare(a: number, b: number): causes {
  if (a === b) return 0;
  return a > b ? 1 : -1;
}
// this function returns 1, 0, or -1 based on comparison