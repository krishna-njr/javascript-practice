
// Three type of variable in javascript : 

/*
    var : function 
    let : block 
    const : block 

*/ 


let fname = 'username', lname = 'lastname', age = 24; 

console.log(`
        first name of user is ${fname}
        last name of user is ${lname}
        and age of person is ${age}
    `); 


const printUser = () => {
    let fname = 'username', lname = 'lastname', age = 24; 
    if(fname){
        let fname = 'username-2'; 
        // const location  = 'xyz/street-123'; 
        var location  = 'xyz/street-123';  // since it is function level scope support : 
        console.log(fname); 
    }
    console.log(`location of user is ${location}`); 

}

printUser(); 