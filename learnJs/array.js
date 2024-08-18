const a=[1,2,3,4,5];
console.log(a);
a.push(6);
// console.log(a);
// a.unshift(0); // adds element at first index (similar to push front)
// console.log(a);
// a.shift();
// console.log(a);
// console.log(a.includes(3));
// console.log(a.indexOf(3));
// console.log(a.indexOf(10));

// const b=a.join()
// console.log(b);
// console.log(typeof(b));
// console.log(b[1]);

//slice (original array dont change and end index is not inclusive)
// const c=a.slice(1,3);
// console.log(`slice array ${c}`);
// console.log(`original array after slice ${a}`);

// //splice (original array changes and end index is inclusive)
// const d=a.splice(1,3);
// console.log(`splice array ${d}`);
// console.log(`original array after splice ${a}`);

// some more properties

// const t1 = ["a","b","c","d"];
// const t2 = [1,2,3,4,5];
// // t1.push(t2); // pushed complete array

// // console.log(t1[4]);

// const t3 = t1.concat(t2); // returns new array which is merged
// console.log(t3);

// const t4 = [...t1,...t2]; // spread operator (spread array into individual elements)
// console.log(t4);

// const t5 = [1,2,3,[4,5,6],7,[8,9,[10,11]]]; // multidimension array
// const t6 = t5.flat(Infinity); // returns 1d array
// console.log(t6);

// check if array
console.log(Array.isArray("Ayush"));
console.log(Array.from("Ayush"));

// conversion from object to array we neet to define whethwer we want array of keys or value
// if noto defined returns empty array
console.log(Array.from({name:"Ayush"}));

// creating array of multiple elements
let s1=1;
let s2=2;
let s3=3;
console.log(Array.of(s1,s2,s3));