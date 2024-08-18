const user={
    name:"Ayush",
    age:19,
    greeting:function(){
        console.log(`welcone ${this.name}`);
        console.log(this);
    }
}
// user.greeting();
// user.name="abc";
// user.greeting();

// console.log(this); // empty object (in browser window is global object)

// function one(){
//     let username="Ayush";
//     console.log(this.username); // cannot use this in functions useful in objects only
//     console.log(this);
// }
// one();

// arrow functions  ()=>{}  syntax

const two = () => {
    let username="Ayush";
    console.log(this);
}

const addTwo=(n1,n2)=> n1+n2; // no need to write return (implicit function)
// if we want to return object we need too wrap it in parenthesis
const solve=()=>({name:"Ayush"});
two();
