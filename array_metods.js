const arr = [2,3,4,5,6,7] ;
const fruits = ["apple" ,"mango" ,"cherry" ]
const square =arr.map((e)=> e*e) ;
const even  = arr.filter((e)=>  e%2===0)

// fruits.push("banana") ;
// fruits.shift() ;
// fruits.unshift("guava") ;
// fruits.slice(0,1) ;
// fruits.splice(0,2) ;

const res =arr.reduce((acc,e)=>(acc+e),0)
console.log(res) ;