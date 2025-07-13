"use strict";
let myObject = {
    username: "Elzero",
    id: 100,
    hired: true,
    skills: {
        one: "HTML",
        two: "CSS"
    }
};
myObject.id = 101;
myObject.hired = false;
console.log(myObject.username);
console.log(myObject.id);
console.log(myObject.hired);
console.log(myObject.skills.one);
let anotherObject = {
    username: "Ahmed",
    id: 150,
    skills: {
        one: "JS",
        two: "TS"
    }
};
console.log(anotherObject.username);
console.log(anotherObject.skills.two);
//# sourceMappingURL=21-Type_Annotations_With_Object.js.map