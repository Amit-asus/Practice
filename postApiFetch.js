const postData =  async function (url , data = {}) 
{
    const res = await fetch(url,{
        method :  'POST' ,
        headers :   {'Content-Type' : 'application/json'} ,
        body  : JSON.stringify(data)
    })

    if(!res.ok)
    {throw new Error()}
    const jsonData  = await  res.json() ;
    console.log(jsonData) ;
    return  jsonData ; 
 
}

const url = "https://jsonplaceholder.typicode.com/posts"; // Free API endpoint
const data = {
  title: "foo",
  body: "bar",
  userId: 1,
};

postData(url, data);
