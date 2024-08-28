const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject({ name: "amit", age: 22 });
  }, 1000);
});

myPromise
  .then((data) => {
    console.log("data 1", data);
    return data;
  })
  .then((data) => {
    console.log("data 2", data);
  })
  .catch(() => console.log(new Error()))
  .finally(() => {
    console.log("finally got executed");
  });
