class Person{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
// no need to mention function keyword inside class
    greet():void{
        console.log(`hi ${this.name}`);
    }
}

// Blueprint of an object


const obj1 = new Person("Rohit",20);
const obj2 = new Person("Pushp",19);
const obj5= new Person("Sumit", 25);
console.log(obj1);
console.log(obj2);
console.log(obj5);


console.log(obj1.name);
obj1.greet();

// public private protected

class Customer{
    public name:string;
    private age:number;
    protected balance:number;

    constructor(name:string,age:number,balance:number){
        this.name = name;
        this.age = age;
        this.balance = balance
    }

    meet():number{
       this.age = this.age+10;
       return this.age;
    }
}

const P1 = new Customer("Deepak",20,420);
console.log(P1.name);

console.log(P1.meet());
// console.log(P1.balance);

class Employee extends Customer {
    salary:number;
 
    constructor(salary:number,name:string,age:number,balance:number){
        super(name,age,balance);    //since inheritating from parent
        this.salary = salary;
    }

    greet():void{
        console.log(this.balance);  //protected
    }

    meet():number{
        console.log("Hello Coder army");
        return 10;
    }
}

const E1 = new Employee(420,"Rohit", 20,320);
console.log(E1.meet());     //nearest function is called
console.log(E1.salary);


// Generic: Template

// function value(a:(number|string|number[]|boolean)):(number|string|number[]|boolean){
//    return a;
// }
 

function value<T>(a:T):T{
    return a;
}


console.log(value<number>(10));
console.log(value<string>("Rohit"));

// Even if you don't mention type its all right!!
console.log(value([10,11,12,13,14]));
console.log(value(true));
console.log(value(["MOhan","Rohan"]))



interface Admin<T,U> {
    name:string,
    age:number,
    addhar:T,
    salary:U
}


const obj10: Admin<number,number> = {
    name:"Rohit",
    age:20,
    addhar:123,
    salary:23213
}

const obj11: Admin<string,number>={
    name:"Rohit",
    age:20,
    addhar:"32112",
    salary:13
}


