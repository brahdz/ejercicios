function bubbleSort(arr) {
  const n = arr.length;

  console.log("Arreglo original: " + arr);

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  console.log("Arreglo ordenado: " + arr);
}

const inputArray = [3, 6, 12, 5, 100, 1];
bubbleSort(inputArray);