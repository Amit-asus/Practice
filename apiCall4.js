async function getData() {
    try{
        const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        console.log('data',data)
        const result  =  await data.json() ;
        console.log('result',result) ;
    }
    catch(error)
    {
        console.log(error) ;
    }
}


getData() ;
