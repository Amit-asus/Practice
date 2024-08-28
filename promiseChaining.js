function getWeather()
{
    return new Promise((res,rej)=>{
        setTimeout(()=> {res('rainy')},2000)
    })
}


function getWeatherIcon(weather)
{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            switch(weather)
            {
                case   'rainy'  :
                res("rainy icon") ;
                break  ;

                case 'coudy' : 
                res(cloudy) ;
                break  ;


                default :
                res('no icon found ') ;
                break  ;
            }
        })
    })
}


function onSuccess(data)
{
 console.log(data)
}

function onError(error)
{
 console.log(error)
}

const res  = getWeather().then(getWeatherIcon).then(onSuccess ).catch(onError) ;
console.log(res) ;