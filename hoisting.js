

/*
    hoisting is the js behaviour in which all the variable declaration move to top part of 
    the respectively scope : 


*/


// let const are hoisted but not defined :  


let age; 
console.log('show undefined', age); 
age = 10; 



console.log('show undefined', name); 
name = 'username'; 
var name; 



city = 'nyc'; 
console.log('shows container value', city); 
var city; 


// console.log(mobile); // show ReferenceError
let mobile; 
mobile = 10123456; 

// console.log(``, email); // show ReferenceError
const email = 'exmaple@gmail.com'; 




