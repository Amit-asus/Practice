const info = {
  name: "amit",
  age: 25,
  acount: {
    gmail: {
      account1: "amitkushwaa@gmail.com",
      account2: "amitkushwaha01406@gmail.com",
    },

    instagram: {
      account1: "amit_tt",
      account2: "hello_amit",
    },
  },
};

const deepCopy = (obj) => {
  if (typeof obj !== "object" || typeof obj === null) {
    return obj;
  }

  let coppied = Array.isArray(obj) ? [] : {};
  let keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    coppied[keys[i]] = deepCopy(obj[keys[i]]);
  }

  return coppied;
};

let copy = deepCopy(info) ;
copy.name  = 'changed' ;
console.log(copy) ;
console.log(info) ;
