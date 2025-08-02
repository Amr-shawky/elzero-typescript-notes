"use strict";
console.log("Task 1: Type Assertion");
let data19 = "TypeScript";
console.log(data19.length);
console.log("--------------------------------------");
console.log("Task 3: Classes & Classes with Interfaces");
class Car {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    printInfo() {
        console.log(`${this.brand} - ${this.year}`);
    }
}
const myCar = new Car("Toyota", 2020);
myCar.printInfo();
console.log("--------------------------------------");
console.log("Task 4: Interface and Class Implementation");
class Truck {
    constructor(model) {
        this.model = model;
    }
    printModel() {
        console.log(`Model: ${this.model}`);
    }
    drive() {
        console.log("Driving...");
    }
}
const myTruck = new Truck("Ford");
myTruck.printModel();
myTruck.drive();
console.log("--------------------------------------");
console.log("Task 5: Type Narrowing");
function printId(id) {
    if (typeof id === "number") {
        console.log(`ID is number: ${id}`);
    }
    else {
        console.log(`ID is string: ${id}`);
    }
}
printId(123);
printId("abc");
console.log("--------------------------------------");
console.log("Task 6: Type Narrowing with Union Types");
function printRole(user) {
    if ("isAdmin" in user) {
        console.log(`Admin1 ${user.username} has permissions: ${user.permissions.join(", ")}`);
    }
    else if ("canEdit" in user) {
        if (user.sections.length === 0) {
            console.log(`Editor ${user.username} has no sections assigned`);
        }
        else {
            console.log(`Editor ${user.username} can edit sections: ${user.sections.join(", ")}`);
        }
    }
    else {
        console.log(`Viewer ${user.username}`);
    }
}
const adminUser1 = {
    username: "Alice",
    isAdmin: true,
    permissions: ["read", "write", "delete"]
};
printRole(adminUser1);
const editorUser = {
    username: "Bob",
    canEdit: true,
    sections: ["section1", "section2"]
};
printRole(editorUser);
const viewerUser = {
    username: "Charlie"
};
printRole(viewerUser);
console.log("--------------------------------------");
console.log("Task 7: Basic Simple Generics");
function wrapInArray(value) {
    return [value];
}
console.log(wrapInArray(42));
console.log(wrapInArray("Hello"));
console.log(wrapInArray({ name: "Alice" }));
console.log("--------------------------------------");
//# sourceMappingURL=task19.js.map