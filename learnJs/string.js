let name="Ayush";
let age=19
console.log(`I am ${name} and i am ${age} years old`); // string interpolation
const str=new String("Ayush");
console.log(str[0]);
console.log(str.__proto__);
console.log(str.length)
console.log(str.toUpperCase());
console.log(str.charAt(1));
console.log(str.indexOf('y'));
console.log(str.slice(1,3));
let newStr="  Ayush   ";
console.log(newStr);
console.log(newStr.trim());
console.log(newStr.trimEnd());
let url="http://ayush.com/ayush%20pardhi";
console.log(url.replace("%20","-"));
console.log(url.includes("ayush"));
console.log(url.split("/"));