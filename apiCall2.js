async function callApi()
{

    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    if(!res.ok)
    {
        throw new Error("res not ok ") ;
    }

    const data =  await res.json() ;
    console.log(data)

}



 callApi();