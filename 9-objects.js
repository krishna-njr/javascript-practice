

/*
    Objects : 

    in  which we can store variables and function/methods, 
    in form of keys & values, 

    {
        name : key1, 
        type : key2, 
        model : key3, 
        weight : key4, 
        color : key5, 
        version : key6, 

        start : function(), 
        brake : function(), 
        drive : function(), 
        stop : function(), 
        accelerate : function(), 
    }

*/


// object literals : 

const car = {
    name: 'xyz', 
    type: 'type1', 
    model: 'model1', 
    weight: '200', 
    color: 'purple', 
    version: 'v4', 

    start: function(){
        return "vehicle is started !"; 
    }, 

    brake: function(){
        return "brakes applied !"; 
    }, 

    accelerate: function(){
        return "speed is increased !"; 
    }, 

    stop: function(){
        return "vehicle is stoped !"; 
    }, 
}; 


console.log(car); 

console.log(car.start());

// using new Object(); 

const person = new Object({
    fname: 'wick',
    lname: 'deev', 
    age: NaN, 
    mail: 'wick@example.com', 
}); 


console.log(person); 


// 

const properties = Object.values(person);

console.log(properties); 

for(const prop of properties){
    console.log(prop); 
}

console.log("property check", "fname" in person); 
console.log("property check", person.hasOwnProperty("fname")); 
console.log("property check", person.fname !== undefined); 
console.log("property check", person.xyz !== undefined); 


// object methods : 
// this keyword: 

const person1 = {
    fname : "first_name",
    lname : "last_name", 
    age :  34, 

    greet: function(){
        return `${this.fname}, ${this.lname} with age ${this.age}`; 
    }, 

    getName: () => {
        return this.fname; 
    }, 

    getFullname: () => {
        return this.fname + " " + this.lname; 
    }
    ,

    myFunction: function(){
        return this; 
    }

}; 


console.log(person1.greet()); 
console.log(person1.getName()); 
console.log(person1.getFullname()); 

console.log(`something fissy : `, person1.getFullname.call(person1)); 

const getName = person1.getName; 

console.log(getName.call(person1)); 

console.log(person1.myFunction()); // returning itself : 


// for multiple object creation of same data type | fields. 

function Person(fname, lname, age, group){
    this.fname = fname; 
    this.lname = lname; 
    this.age = age, 
    this.group = group
}; 

const child = new Person("blue", "otto", 14, 'B'); 
const mother =new Person("sting", "blue", 29, 'A'); 
const father = new Person("carsi", "otto", 31, 'A'); 
const brother = new Person("Ultron", "otto", 7, 'B'); 

console.log(child); 
console.log(mother); 
console.log(father); 
console.log(brother); 


// using method from one object to another object using call(), bind(), apply(), 

const user1 = {
    fname: 'Jhon', 
    lname: 'Cena', 
}

const user2 = {
    getFullname: function(){
        return this.fname + " " + this.lname; 
    } 
}; 


const mixup_object_result = user2.getFullname.call(user1); 

console.log(mixup_object_result); 

// Function Borrowing : 


const client = {
    fname: 'Jhon', 
    lname: 'Cena', 
    getFullname: function(){
        return this.fname + " " + this.lname; 
    } 
}

const member = {
    fname: 'Mamba', 
    lname: 'soul',
};


const fullname_of_member = client.getFullname.bind(member); 

console.log(fullname_of_member()); 



