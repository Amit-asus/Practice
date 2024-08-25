const bubbleSort = (arr) => {
  let swappped = false;

  do {
    swappped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] < arr[i]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swappped = true ;
      }
    }
  } while (swappped);

  return arr  ;
};

const arr = [8, 6, 5, 1, 243, 43];
const result = bubbleSort(arr);

console.log(result);
