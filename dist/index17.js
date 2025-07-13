"use strict";
var Level;
(function (Level) {
    Level[Level["Kids"] = 15] = "Kids";
    Level[Level["Easy"] = 9] = "Easy";
    Level[Level["Medium"] = 6] = "Medium";
    Level[Level["Hard"] = 3] = "Hard";
})(Level || (Level = {}));
let selectedLevel = "Easy";
if (selectedLevel === "Kids") {
    console.log(`The level is ${selectedLevel} and the number of seconds is ${Level.Kids}`);
}
else if (selectedLevel === "Easy") {
    console.log(`The level is ${selectedLevel} and the number of seconds is ${Level.Easy}`);
}
else if (selectedLevel === "Medium") {
    console.log(`The level is ${selectedLevel} and the number of seconds is ${Level.Medium}`);
}
else if (selectedLevel === "Hard") {
    console.log(`The level is ${selectedLevel} and the number of seconds is ${Level.Hard}`);
}
else {
    console.log("Invalid level selected");
}
//# sourceMappingURL=index17.js.map