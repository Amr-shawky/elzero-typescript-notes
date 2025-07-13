/**
 * This lesson demonstrates Class Access Modifiers in TypeScript.
 * - public: accessible from anywhere
 * - private: accessible only inside the class
 * - protected: accessible inside the class and subclasses
 * - Helps encapsulate class logic and improve code safety
 */

class Person {
  public name: string;
  private salary: number;
  protected age: number;

  constructor(name: string, salary: number, age: number) {
    this.name = name;
    this.salary = salary;
    this.age = age;
  }

  public showInfo(): string {
    return `Name: ${this.name}, Salary: ${this.salary}, Age: ${this.age}`;
  }
}

class Employee extends Person {
  getAge(): number {
    return this.age;
  }
}

let emp = new Employee("Amr", 8000, 25);
console.log(emp.name);
// console.log(emp.salary);  // ❌ Error
// console.log(emp.age);     // ❌ Error
console.log(emp.showInfo());
console.log(emp.getAge());
