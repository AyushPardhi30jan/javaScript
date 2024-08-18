// declare using constructor -> singleton
// Object.create


// declare like literal -> not singleton
// const mySym=Symbol("key1");
// console.log(typeof(mySym));
// const user={
//     name:"Ayush",
//     "full name":"Ayush Pardhi", // cannot access full name using dot operator
//     [mySym] :"mykey1", // syntax for symbol (square bracket) if not use [] it is reffered as string
//     age:19,
//     location:"Surat",
//     email:"ayush@gmail.com",
//     isLoggedIn:false
// }

// // console.log(user.name);
// // console.log(user["name"]); // kesy stored in form of string
// // console.log(user["full name"]);
// // console.log(user[mySym]); // access symbols like this (square bracket)

// // if we dont want to overwrite in object use freeze
// // Object.freeze(user);
// user.email="ayu@gmail.com";
// // console.log(user.email);
// console.log(user);

// // define method (function)
// user.greeting=function(){
//     console.log(`hello user`);
// }
// user.greeting();
// user.greeting2=function(){
//     console.log(`hello ${this.name}`); // this keyword
// }
// user.greeting2();

// const tuser=new Object(); // singleton declaration
const tuser={}

tuser.id="123abc";
tuser.name="Ayu";
tuser.isLoggedIn=false;
console.log(tuser);
// we can also create nested objects

const o1={1:"a",2:"b"};
const o2={3:"c",4:"d"};

const o3={o1,o2}; // o3 will contain 2 obj o1 and o2
console.log(o3);
const o4={...o1,...o2}; // spread operator
console.log(o4); 
const o5=Object.assign(o1,o2); // assign(target,source) source gets copied in target
console.log(o5);

// to get keys of an object
console.log(Object.keys(tuser)); // returns array of keys
console.log(Object.values(tuser));
console.log(Object.entries(tuser)); // returns array of [keys,values] which is an array 
// check if it has properties
console.log(tuser.hasOwnProperty("isLoggedIn"));