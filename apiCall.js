async function api() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json(); // Parse the JSON data from the response
    console.log(data); // Log the data to the console
  } catch (error) {
    console.error("Error fetching data:", error); // Handle errors
  }
}

api();
