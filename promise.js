function getWeather()
{
    return new Promise((res,rej)=>{
        setTimeout(()=> {
            console.log('hi') ;
            rej('rejected') ;
           
        } , 2000) 
    })
}


getWeather().then((res)=> {
    console.log(res) ;
}).catch((err)=>{console.log(err)}).finally(()=> {
    console.log('in finally') ;
})