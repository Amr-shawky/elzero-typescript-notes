"use strict";
var Kids;
(function (Kids) {
    Kids[Kids["Five"] = 25] = "Five";
    Kids[Kids["Seven"] = 20] = "Seven";
    Kids[Kids["Ten"] = 15] = "Ten";
})(Kids || (Kids = {}));
function getHardLevel() {
    return 3;
}
var Level1;
(function (Level1) {
    Level1[Level1["Kid"] = 15] = "Kid";
    Level1[Level1["Easy"] = 9] = "Easy";
    Level1[Level1["Medium"] = 6] = "Medium";
    Level1[Level1["Hard"] = getHardLevel()] = "Hard";
    Level1[Level1["Insane"] = 1] = "Insane";
})(Level1 || (Level1 = {}));
let selectedLevel1 = "Hard";
if (selectedLevel1 === "Hard") {
    console.log(`The level is ${selectedLevel1} and the number of seconds is ${Level1.Hard}`);
}
else if (selectedLevel1 === "Medium") {
    console.log(`The level is ${selectedLevel} and the number of seconds is ${Level1.Medium}`);
}
else if (selectedLevel1 === "Kid") {
    console.log(`The level is ${selectedLevel1} and the number of seconds is ${Level1.Kid}`);
}
else {
    console.log("Invalid level selected");
}
//# sourceMappingURL=17-DataTypes-Enums_Part2.ts.js.map