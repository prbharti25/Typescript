"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // no need to mention function keyword inside class
    greet() {
        console.log(`hi ${this.name}`);
    }
}
// Blueprint of an object
const obj1 = new Person("Rohit", 20);
const obj2 = new Person("Pushp", 19);
const obj5 = new Person("Sumit", 25);
console.log(obj1);
console.log(obj2);
console.log(obj5);
console.log(obj1.name);
obj1.greet();
// public private protected
class Customer {
    constructor(name, age, balance) {
        this.name = name;
        this.age = age;
        this.balance = balance;
    }
    meet() {
        this.age = this.age + 10;
        return this.age;
    }
}
const P1 = new Customer("Deepak", 20, 420);
console.log(P1.name);
console.log(P1.meet());
// console.log(P1.balance);
class Employee extends Customer {
    constructor(salary, name, age, balance) {
        super(name, age, balance); //since inheritating from parent
        this.salary = salary;
    }
    greet() {
        console.log(this.balance); //protected
    }
    meet() {
        console.log("Hello Coder army");
        return 10;
    }
}
const E1 = new Employee(420, "Rohit", 20, 320);
console.log(E1.meet()); //nearest function is called
console.log(E1.salary);
// Generic: Template
// function value(a:(number|string|number[]|boolean)):(number|string|number[]|boolean){
//    return a;
// }
function value(a) {
    return a;
}
console.log(value(10));
console.log(value("Rohit"));
// Even if you don't mention type its all right!!
console.log(value([10, 11, 12, 13, 14]));
console.log(value(true));
console.log(value(["MOhan", "Rohan"]));
const obj10 = {
    name: "Rohit",
    age: 20,
    addhar: 123,
    salary: 23213
};
const obj11 = {
    name: "Rohit",
    age: 20,
    addhar: "32112",
    salary: 13
};
