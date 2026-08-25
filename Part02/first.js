"use strict";
let num = 10;
let x = 10; //number type initialisation
// x = "Rohit";     //error
let val = "Rohit";
// let money
let money;
money = 20;
money = "Rohit";
// console.log(money.toUpperCase());
let val2;
val2 = "Rohit";
val2 = 10;
if (typeof val2 === 'string') //since val2 is unknown so we need to make sure if val2 is string 
    console.log(val2.toUpperCase());
if (typeof val2 === 'number')
    console.log(val2.toFixed(2));
// Non Primitive
// ARRAY
let arr = [2, 4, 5, 7, 11];
let arr2 = [2, 1, 19, 10];
let arr3 = ["Rohit", 20, 11, "Sohan"];
arr3.push(10);
let arr4 = ["rohit", 10, false, 11];
// TUPLE
let tuple = ["Rohit", 10, 11];
// Objects
// inline
let obj1 = {
    name: "Rohit",
    age: 20,
    gender: "female"
};
let person;
person = {
    name: "rohit",
    age: 20,
    balance: 420
};
let customer2 = {
    name: "Rohit",
    age: 21,
    id: "dkfjnb",
};
let c1 = {
    name: "Rohit",
    age: 20,
    id: "fshfsd"
};
;
let obj3 = {
    names: "Rohit",
    age: 20,
    position: "manager",
    id: 210
};
// Interface vs Type
// Function
// Classes
