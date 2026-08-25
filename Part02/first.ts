let num:number = 10;

let x = 10;     //number type initialisation
// x = "Rohit";     //error
let val = "Rohit"

// let money
let money:any;
money = 20;
money = "Rohit";

// console.log(money.toUpperCase());

let val2:unknown;

val2 = "Rohit";
val2 = 10;

if(typeof val2 === 'string')    //since val2 is unknown so we need to make sure if val2 is string 
console.log(val2.toUpperCase());
if(typeof val2 === 'number')
console.log(val2.toFixed(2));

 
// Non Primitive
// ARRAY
let arr:number[] = [2,4,5,7,11];
let arr2 = [2,1,19,10];

let arr3:(string | number)[] = ["Rohit",20,11,"Sohan"];
arr3.push(10);

let arr4:(string | number | boolean)[] = ["rohit",10,false,11];

// TUPLE
let tuple:[string,number,number] = ["Rohit",10,11];
 

// Objects
// inline
let obj1:{name:string,age:number,gender:string} = {
    name:"Rohit",
    age:20,
    gender:"female"
}



let person :{name:string, age:number, balance:number};
person = {
    name:"rohit",
    age:20,
    balance:420
};

// let n1:number;
// n1 = 10; 
// n1=true  //error


type n1 = {name:string, age:number, id:string};
let customer2:n1 ={
    name: "Rohit",
    age:21,
    id:"dkfjnb",
}


type customer = {
    name:string,
    age:number,
    id: string
}

let c1 : customer ={
    name:"Rohit",
    age:20,
    id:"fshfsd"
}


interface admin {
    names:string,
    age:number,
    position:string
};

interface admin {
    id:number
}


let obj3: admin = {
    names:"Rohit",
    age:20,
    position:"manager",
    id:210
};


// Interface vs Type
// Function
// Classes



