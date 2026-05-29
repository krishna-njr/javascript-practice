

/*
    function and types : 
     - it's resuable block of code, which we used anywhere in the codebase, 
     without rewrite them again and again. 
     
     types : 
        - named function | normal function 
        - IIFE (immediate invoke function expression)
        - anonymous function (function without name, used in callback)
        - function expression (defined function into the variable)
        - arrow function (with some syntax : () => ) 

*/ 


// named function 
console.log(`named function`); 
function greet(){
    return `hello to user ${this.name || " "} `; 
}; 
console.log(greet()); 

// IIFE :
console.log(`IIFE`);  
console.log(function getName(){
    return this.name; 
}({name: "wick"}));

// anonymous function : 
console.log(`anonymous function`); 

const randomValue = function(){
    return Math.random() * 1000; 
}; 

console.log(() => {
    return "something"; 
})

const getAge = () => {
    return this.age; 
}; 

console.log(function(){
    return "IIFE"; 
}); 

console.log(randomValue()); 
console.log(getAge.call({name: "blue", age: 34})); // arrow function : it will have this keyword for context : 

// function expression : 
console.log(`function expression`); 
const user = () => {
    return {
        name: "username", 
        age: 23, 
    }; 
}
console.log(user()); 

const notes = function(){
    return [1,2,3,4,5,6,7]; 
}; 

console.log(notes()); 

// arrow function : 

console.log(`arrow function`); 
const orders = (id) => {
    return [2, 53, 7654, 2345]; 
};

console.log(orders()); 