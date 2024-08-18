function sayMyName(){
    console.log("Ayush");
} 

// function add(n1,n2){ // parameters
//     console.log(n1+n2);
// }

function add(n1,n2){ // parameters
    return n1+n2;
}

function userLogin(username="some user"){ // set a default value
    if(!username){
        return `please enter name`;
    }
    return `${username} just logged in`;
}

console.log(userLogin()); // if no argument undefined is passed as argument

console.log(add(2,3)); // when function call argument

function calculatePrice(...num1){ // rest operator (spreaded values to bundle)
    let sum=0;
    for (let index = 0; index < num1.length; index++) {
        sum += num1[index];
    }
    return sum;
}

console.log(calculatePrice(10,20,30));

function handleObj(obj){
    console.log(`${obj.name} is ${obj.age} years old`);
}

handleObj({name:"Ayush",age:19});