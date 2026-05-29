

const person1 = {
    name: 'wick', 
    age: 34, 

    location: {
        city: 'NYC', 
        state: 'state-2', 
        country: 'xyz', 
    }, 
}; 

console.log(person1); 

// shallow copy :

console.log(`shallow copy`); 

const shallowCopy = person1; 

console.log(shallowCopy);

// shallowCopy.location.city = 'captown'; // **********************

console.log('Actual object : ', person1); 
console.log('Copied object', shallowCopy); 



// deep copy : 

console.log(`\nDeep copy \n`); 
const deepCopy = JSON.parse(JSON.stringify(person1)); 

deepCopy.location.city = 'captown'; 

const deepCopy1 = structuredClone(person1); // built-in way to deep copy the object or array : 
console.log('Actual object : ', person1); 
console.log('Copied object', deepCopy); 



