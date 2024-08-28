function multiply(a,b)
{
    return  a*b ;
}

function addition(a,b)
{
    return a+b ;
}


function compute(callBack,a,b)
{
   return  callBack(a,b) ;
}


console.log(compute(multiply,5,10)) ;

const display = () => {

    console.log("Hello") ;

}

const btn  =document.querySelector("btn") ;

btn.addEventListner("click" , display) ;