function asyncFun(state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      state
        ? resolve({ name: "amith" })
        : reject(new Error("Something went wrong"));
    }, 1000);
  });
}

async function asyncFuncs(state) {
  console.log("started");

  try {
    const res = await asyncFun(state);
    console.log(res);
  } catch (err) {
    console.log(err.message);
  }
}

asyncFuncs(false);
