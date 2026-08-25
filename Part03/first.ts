interface Person{
    name:string,
    age:number,
    gender:string,
    aadhar?:number,
}
// It is not necessary that all have aadhar 

// const child:Person = {
//     name:"Rohit",
//     age:20,
//     gender:"Male",  
// }


// Latest example

interface customer {
    name:string,
    age:number,
    balance:number
}

const obj3: Readonly<customer> = {
    name:"Rohit",
    balance:210,
    age:20
}

// Partial: All property becomes optional
// Required: ALl property should be filled
// Readonly: The property can only be read, write option is not available


// array of Objects

interface peopele {name:string,age:number};
interface manager {salary:number,id:string}

const arr: (peopele | manager)[] = [{name:"Rohit",age:20},{name:"Mohit",age:18}, {salary:20,id:"2321"}]

// function in TS


function greet(a:number):number{
    console.log(a);
    return a+5;
}

console.log(greet(10));


function meet(msg:string,val:number):void{
    console.log(msg,val);
}
meet("Pushp Raj Bharti", 4);


// default parameter
function neet(msg:string = "Jit"){
    console.log(msg);
}

neet();
neet("Bittu");


// Optional Parameter

function GATE(person?:string){
    console.log(person||"Mohan");
}

GATE("Pushp");
GATE();


// arrow function

const sum = (a:number,b:number):number=>{
    return a+b;
}

console.log(sum(3,4));



// callback function

type chill = (amount:number)=>void;

// const sqaureroot = (val:number)=>{
//    return val*val;
// }

const sqrRoot = (value:number)=> value*value;



function placeOrder(order:number,callback: chill):void{
    
    const amount:number = order+10;
    callback(amount);
}


placeOrder(10,(amount)=>{
    console.log(amount);
})



// Rest Parameter

function total(...arr:number[]){
   let ans:number = 0 ;
   arr.forEach((val:number)=>ans = ans+val);
   console.log(ans);    
}


total(2,3,1,4,123,1,12,10);





// extend keyword

interface human{
    name:string,
    age:number
};

interface Teacher extends human{    //teacher is human as well
   salary:string,
   id:number
}

interface BankEmployee extends human{
    salary: string,
    position: string
}

const obj8:Teacher = {
    name :"Rohit",
    age: 20,
    salary:"chillar",
    id:123
}







