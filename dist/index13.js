"use strict";
function getActions(btns) {
    console.log("Action for Button Up is:", btns.up);
    console.log("Action for Button Right is:", btns.right);
    console.log("Action for Button Down is:", btns.down);
    console.log("Action for Button Left is:", btns.left);
}
getActions({
    up: "Jump",
    right: "Go Right",
    down: "Go Down",
    left: "Go Left"
});
function getAdvancedActions(btns) {
    getActions(btns);
    console.log("Is Button X Active?", btns.x);
}
getAdvancedActions({
    up: "Go Up",
    right: "Go Right",
    down: "Go Down",
    left: "Go Left",
    x: true
});
//# sourceMappingURL=index13.js.map