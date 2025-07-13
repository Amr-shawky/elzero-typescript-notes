"use strict";
function showData(name = "Unknown", age, country) {
    return `${name} - ${age} - ${country}`;
}
console.log(showData());
console.log(showData("Osama", 40));
console.log(showData(undefined, 40, "Egypt"));
//# sourceMappingURL=09-Function_Optional.js.map