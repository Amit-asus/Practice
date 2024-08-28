function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 2000);
  });
}

async function getData() {
  try {
    console.log("started executing the funtion");
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("inside the finally block");
  }
}


getData();
