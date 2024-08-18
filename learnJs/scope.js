// things declared out are global scope
let a=10
if(true){ // things declared in block -> block scope
    let a=0;
    const b=1;
    var c=2;
}
// console.log(a); // not in scope
// console.log(b); // not in scope
console.log(c); // out of scope but we can access it

console.log(a);

function one(){
    const user="Ayush";
    function two(){
        const web="google";
        console.log(web);
    }
    two();
    console.log(user);
}

one();

addOne(2);
// addTwo(2); // not possible

function addOne(num1){ // only declaration (can be used in lines before declaration)
    return num1+1;
}

const addTwo=function(num1){ // declaration + hold in variable (cannot be used before declaration)
    return num1+2;
}
console.log(addTwo(5));