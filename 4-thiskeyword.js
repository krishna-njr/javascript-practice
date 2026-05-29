// "use strict"

/*

    this keyword : 
     - it behave different in different different places 
        based on where we are using it. 

*/


// in strict it's is undefined and in non strict mode it's global object : 
console.log(this);

function aboutThis(){
    console.log(this);
}; 


// this : inside function behave differently based 
// on where and how we are calling the function
// based on invoked : 

function greet(){
    console.log(`hello to this person ${this.name}`); 
}; 

const person1 = {
    name : "vicky", 
    sayHello: greet, 
}; 

const person2 = {
    name : "jhon", 
}; 

greet(); 
person1.sayHello(); 
greet.call(person2); 


// this : inside arrow function : 

this.name = "arrow-function"; // global object : 
let person3 = {
    name: "wick", 
    sayHello: () => {
        
        return  `hello there, i am ${this.name}`; 
    },  
}; 

const person3Greeting = person3.sayHello(); 
console.log(person3Greeting); 

// 

let person4 = {
    name : "allen", 
    age: 34, 
    greet: function() {
        return `person4 : hi here, i am ${this.name}, and age is ${this.age}`; 
    }
}

console.log(person4.greet()); 


