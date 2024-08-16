// primitive -> pass by value

// 7 types : Stirng, Number, Boolean, null, undefined, symbol, Bigint

// non primitive -> pass by reference

// Array, Object, Functions

const id=["1","2","3"];

let myObj={
    name:"ayush",
    age:19
}

const myFunc = function(){
    console.log("hello World");
}

myFunc();

// stack -> primitive && heap -> non-primitive
let obj2=myObj;
obj2.age=20;
console.log(myObj.age);
console.log(obj2);