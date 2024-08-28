function one() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("data1"), 1000);
  });
}

function two() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("data2"), 1000);
  });
}

function three() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("data3"), 1000);
  });
}


Promise.all([one(),two(),three()])
.then((dataArr)=>{console.log(dataArr)});
