//1st callBack 

setTimeout(()=> {
    console.log('hello') ;
} ,2000) ;



//2 nd callBack 

function  myFun()
{
    console.log("inside function") ;
}

setTimeout(myFun,1000) ;

function divide(x, y) {
    return x/y;
}

function multiply(x, y) {
    return x*y;
}

function compute(callBack, x, y) {
    return callBack(x, y);
}

console.log(compute(divide, 10, 5));    // 2
console.log(compute(multiply, 10, 5));  // 50
