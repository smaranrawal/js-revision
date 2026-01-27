//-----------------Primitive datatypes---------------------------
// Immutable (cannot be changed)
// Stored by value
// When you copy them, a new copy is created
// example:Number ,string,Boolean,null,undefined,Bigint, Symbol

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); //false ,symbol gives unique number





//Non primitive(Reference)

// Mutable
// Stored by reference
// Copying shares the same memory reference

//Example: function,object,Array

const obj1={name:"smaran"};

const array1=["smaran","uttam","sohan"];

const function1= function(){
    console.log("hell bro");
}
function1();

// Stack(primitive)   and Heap(Non-primitive)

let a = 10;
let b = a;

b = 20; // changing b doesnot affect a 
console.log(a);
console.log(b);

// ---------
let obj = { name: "Smaran" };
let obj2 = obj1;

obj2.name = "Rawal";

console.log(obj1.name);