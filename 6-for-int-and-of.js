

/*
    for in 
        - for iterating on objects, we prefer this loop (for in)

    for of 
        - for iterating and enumerating on arrays and collections : 

*/



// for in : 
console.log(`For In loop`); 

const person1 = {
    name: 'wick', 
    age: 23, 
    location: 'nyc/tower-2/ap-4', 
    mobile: 234567897890, 
}; 

for(const keys in person1){

    console.log(keys, " value : ", person1[keys]); 
}; 


// for of : 

console.log(`For of`); 

const list = [1, "abc", true, undefined, null, NaN]; 

for(const value of list){
    console.log(value); 
}; 




