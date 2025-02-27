const obj ={
    name : "Amit"  ,
    greet : function(city)
    {
      console.log(  `hello ${this.name} you are from ${city}` );
    }
}

obj.greet.call({name : 'callName'},'bhopal') ; //calls the function for new obj
obj.greet.apply({name : "applyName" },["mumbai","pune"]) ; //calls the function for new obj but take the array of the params
const boundGreet =  obj.greet.bind({name : "bind"},["kerela"]) ; //permanently bind that obj to the new function
boundGreet() ;