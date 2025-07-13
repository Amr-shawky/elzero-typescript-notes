"use strict";
let all7;
all7 = 100;
all7 = "string";
function getActions1(patterns) {
    console.log(`Hello ${patterns.one}, ${patterns.two}, ${patterns.three}`);
}
getActions1({
    one: "string",
    two: 100,
    three: true
});
function getMixData(data) {
    console.log(`One: ${data.one}, Two: ${data.two}, Three: ${data.three}, Five: ${data.five}`);
}
getMixData({
    one: "Union",
    two: 200,
    three: false,
    five: true
});
//# sourceMappingURL=20-DataTypes_Union_And_Intersection_Types.js.map