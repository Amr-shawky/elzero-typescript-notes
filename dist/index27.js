"use strict";
class Person {
    constructor(name, salary, age) {
        this.name = name;
        this.salary = salary;
        this.age = age;
    }
    showInfo() {
        return `Name: ${this.name}, Salary: ${this.salary}, Age: ${this.age}`;
    }
}
class Employee extends Person {
    getAge() {
        return this.age;
    }
}
let emp = new Employee("Amr", 8000, 25);
console.log(emp.name);
console.log(emp.showInfo());
console.log(emp.getAge());
//# sourceMappingURL=index27.js.map