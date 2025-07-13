"use strict";
const testType = (value) => {
    return `The value is ${value} and the type is ${typeof value}`;
};
console.log(testType("Elzero"));
console.log(testType(100));
console.log(testType(true));
const multipleTypes = (value1, value2) => {
    return `The first value is ${value1}, and the second value is ${value2}`;
};
console.log(multipleTypes("Osama", 100));
console.log(multipleTypes("Elzero", true));
//# sourceMappingURL=35-Generics_Multiple_Types.js.map