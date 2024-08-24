
const arr=[1,2,3,4,5];

// for of loop (use to iterate arrays, map but not objects)

// for(const i of arr){
//     console.log(i);
// }

// const name="Ayush";
// for(const i of name){
//     console.log(i);
// }

// // maps

// const map=new Map();
// map.set("IN","India");
// map.set("Fr","France");
// map.set("Ni","Nigeria");

// console.log(map);

// for(const i of map){
//     // console.log(`firsrt -> ${i.0}, second -> ${i.1}`); // wrong syntax
// }

// for(const [key,val] of map){
//     console.log(val);
// }

// for in loop (returns key of array or obj) (map not iteratable)

// const myObj = {
//     cpp: "c++",
//     js: "javascript",
//     rb: "ruby"
// }

// for(const key in myObj){
//     console.log(`${key} -> ${myObj[key]}`);
// }

// for(const key in arr){
//     console.log(arr[key]);
// }

// for each loop (it is property  of array)

// const lang=["js","cpp","py","rb","java"];

// lang.forEach(function (i){ // no name for call back function & loop will bring i as parameter in it
//     console.log(i);
// })

// lang.forEach( (i)=>{ // using arrow function
//     console.log(i);
// } )

// by passing function's reference not executuing it

// function print(i){
//     console.log(i);
// }
// lang.forEach(print);

// lang.forEach( (item,idx,arr)=>{ // using arrow function
//     console.log(item,idx,arr);
// } )

// const myArr=[
//     {
//         lang:"c++",
//         ext:"cpp"
//     },
//     {
//         lang:"python",
//         ext:"py"
//     },
//     {
//         lang:"javascript",
//         ext:"js"
//     }
// ]

// myArr.forEach( (i)=>{
//     console.log(`language: ${i.lang}, extension: ${i.ext}`);
// })

// for each loop dont provide faciltiy to return particular value 

arr.forEach((item)=>{
    console.log(item);
})

// use filter to return values
// const newArr=arr.filter((item)=>item>2) 

// const newArr1=arr.filter((item)=>{
//     return item>2  // we must use return keyword if we start a scope (explicit return )
// })

// using for each loop
// const newArr2=[];
// arr.forEach((item)=>{
//     if(item>2) newArr2.push(item);
// })

// console.log(newArr1);
// console.log(newArr2);

const newArr3=arr.map((item)=>item+10);
console.log(newArr3);

// chaining 
const newArr4=arr.map((n)=>n*10)
                    .map((n)=>n+1)
                    .filter((n)=>n>30); // whatever valued return by map/filer above it is passed in it
console.log(newArr4);