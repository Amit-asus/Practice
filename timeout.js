

const id  =setTimeout(()=> { console.log("hello")} , 5000) ;


const ans  = 'y'


if(ans ==  'y')
{
    clearInterval(id) ;
}

const i  = setInterval(()=> { console.log('hey')},1000) ;

setTimeout(() =>  {
    clearInterval(i) ;
},5000) ;


