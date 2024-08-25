const matrics  =   [ [1,2,3],[4,5,6],[7,8,9]];

//function to calculate the sum of the digonal element 
function sumOfDigonal(arr)
{
     let sum = 0 ;
    for(let i = 0 ; i < arr.length ; i++)
    {
       sum = sum +  arr[i][i];
    }

    return sum ;
}

//function to sort names 
function sortNames( names)
{
   let result  = names.sort((a,b)=> a.localeCompare(b)) ;
   return result
}

//functio  to sort  numbers
function sortNumbers(arr)
{
    let result =  arr.sort((a,b)=> b-a) ;
    return result ;
}



let result =  sortNumbers([3,2,4,1])
console.log(result);