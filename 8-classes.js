

class Animal {
    
    constructor(voice, name, type){

        this.name = name; 
        this.voice = voice;
        this.type = type; 
    }; 

    get sound(){
        return this.voice; 
    }

     getName(){
        return this.name; 
    }
}; 


const dog = new Animal('Alice', 'barking', 'mamal'); 

console.log(dog.sound); 

console.log(dog.getName());


class Dog extends Animal {
    constructor(name){
        super(name); 
    }; 

    sound(){
        return `dogs barks`; 
    }
}; 


const dog2 = new Dog('lee'); 

console.log(dog2.sound());





