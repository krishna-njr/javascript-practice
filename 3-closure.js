
// normal function outer and inner with variables ; 

const outer = () => {

    const outerVar = "This is outer variable"; 
    return () => {
        const innerVar = "This is inner variable"; 

        console.log(`
            ${outerVar}
            ${innerVar}
            `); 
    }
}; 

const inner = outer(); 
inner(); 

// function currying : 

function adder(a){

    return (b) => {
        const res = a + b; 
        // console.log(res);
        return res; 
    }
}; 


const addTwo = adder(2); 

console.log(addTwo(5)); 



const asyncOperation = () => {

    const test = "testing is done"
    return setTimeout(() => {
        console.log(`An async operation : ${test}`); 
    }, 2000);
};

let operation = asyncOperation(); 

// promise : 
const promise1 = new Promise((resolve, reject) => {

    const flag = true; 
    if(flag){
        resolve("Promise is resolved!!!"); 
    }
    reject("Promise is rejected!!!"); 
})


 promise1.then((data)=> {
    console.log(data); 
}).catch((err) => {
    console.log(err); 
}); 





