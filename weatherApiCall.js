function fetchData() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/todos/2")
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      });
  });
}


function displayData (data)
{
   console.log(data) ;
}

function displayError(err) 
{
     console.log(err)
}

fetchData().then(displayData).catch(displayError);