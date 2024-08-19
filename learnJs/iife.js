// Immediately invoked function expression (iife)
// to avoid pollution from global scope

// (function defination)(function call)

(function hello(){  // named iife
    console.log("hello world");
})(); // semicolon to end the context

(()=>{
    console.log("hello arrow");
})();

((name)=>{
    console.log(`hello ${name}`);
})("Ayush");

// hello();
