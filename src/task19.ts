/*
## **1. Type Assertion**

### Task 1

You are given a variable of type `unknown`.

- Assume it is a string and print its length using **type assertion**.
- Do not use any `if` checks or type guards.

```tsx
let data: unknown = "TypeScript";

```

---

##
*/
// Your code here
console.log("Task 1: Type Assertion");
let data19: unknown = "TypeScript";
console.log((data19 as string).length);
// Output: 10
console.log("--------------------------------------");
/*
## **2. Classes & Classes with Interfaces**

### Task 3

Create a `Car` class with:

- A `brand` (string) and `year` (number) property.
- A method `printInfo()` that logs `"brand - year"`.

Then create an instance and call the method.

---

### Task 4

Create an interface `Drivable` with:

- A method `drive()` that logs `"Driving..."`.

Make a `Truck` class that implements `Drivable` and has:

- `model` property (string).
- Implements the `drive()` method.

Create a `Truck` instance and call `drive()`.
*/
// Task 3
console.log("Task 3: Classes & Classes with Interfaces");
class Car {
    constructor(public brand: string, public year: number) {}

    printInfo() {
        console.log(`${this.brand} - ${this.year}`);
    }
}   

const myCar = new Car("Toyota", 2020);
myCar.printInfo(); // Output: Toyota - 2020

// separator for clarity
console.log("--------------------------------------");
// Task 4
console.log("Task 4: Interface and Class Implementation");
interface Drivable {
    drive(): void;

}

class Truck implements Drivable {
    constructor(public model: string) {
    }
    printModel() {
        console.log(`Model: ${this.model}`);
    }

    drive() {
        console.log("Driving...");
    }
}

const myTruck = new Truck("Ford");
myTruck.printModel(); // Output: Model: Ford
myTruck.drive(); // Output: Driving...


console.log("--------------------------------------");
/*
## **3. Type Narrowing**

### Task 5

Write a function `printId` that accepts a parameter of type `string | number`.

- If it is a number, log `"ID is number: <id>"`.
- If it is a string, log `"ID is string: <id>"`.
- Use **type narrowing** (`typeof`) to differentiate.

---

### Task 6

You now have three types:

```tsx
type Admin = { username: string; isAdmin: boolean; permissions: string[] };
type Editor = { username: string; canEdit: boolean; sections: string[] };
type Viewer = { username: string };
```

Write a function `printRole(user: Admin | Editor | Viewer)` that:

1. Uses the **`in` operator** to check if the user is an Admin, Editor, or Viewer.
2. Logs:
    - `"Admin <username> has permissions: <permissions>"`
    - `"Editor <username> can edit sections: <sections>"`
    - `"Viewer <username>"`
3. If the user is `Editor`, also check if `sections` array is empty:
    - If empty, log `"Editor <username> has no sections assigned"` instead.
*/






// Task 5
console.log("Task 5: Type Narrowing");
function printId(id: string | number): void {
    if (typeof id === "number") {
        console.log(`ID is number: ${id}`);
    } else {
        console.log(`ID is string: ${id}`);
    }
}
printId(123); // Output: ID is number: 123
printId("abc"); // Output: ID is string: abc
console.log("--------------------------------------");

// Task 6
console.log("Task 6: Type Narrowing with Union Types");

type Admin1 = { username: string; isAdmin: boolean; permissions: string[] };
type Editor = { username: string; canEdit: boolean; sections: string[] };
type Viewer = { username: string };

function printRole(user: Admin1 | Editor | Viewer) {
    if ("isAdmin" in user) {
        console.log(`Admin1 ${user.username} has permissions: ${user.permissions.join(", ")}`);
    } else if ("canEdit" in user) {
        if (user.sections.length === 0) {
            console.log(`Editor ${user.username} has no sections assigned`);
        } else {
            console.log(`Editor ${user.username} can edit sections: ${user.sections.join(", ")}`);
        }
    } else {
        console.log(`Viewer ${user.username}`);
    }
}
const adminUser1: Admin1 = {
    username: "Alice",
    isAdmin: true,
    permissions: ["read", "write", "delete"]
};
printRole(adminUser1); // Output: Admin1 Alice has permissions: read, write, delete
const editorUser: Editor = {
    username: "Bob",
    canEdit: true,
    sections: ["section1", "section2"]
};
printRole(editorUser); // Output: Editor Bob can edit sections: section1, section2
const viewerUser: Viewer = {
    username: "Charlie"
};
printRole(viewerUser); // Output: Viewer Charlie

// separator for clarity
console.log("--------------------------------------");

/*
## **4. Basic Simple Generics**

### Task 7

Create a function `wrapInArray` that:

- Takes a value of any type (generic).
- Returns an array containing that value.
*/
// Task 7
console.log("Task 7: Basic Simple Generics");
function wrapInArray<T>(value: T): T[] {
    return [value];
}
console.log(wrapInArray(42)); // Output: [42]
console.log(wrapInArray("Hello")); // Output: ["Hello"]
console.log(wrapInArray({ name: "Alice" })); // Output: [{ name: "Alice" }]
console.log("--------------------------------------");