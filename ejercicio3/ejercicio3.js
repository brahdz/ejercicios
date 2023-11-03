const numbers = [1, 2, 3, 4];
function calculateSumAndProduct(numbers) {
  const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
  const product = numbers.reduce((accumulator, number) => accumulator * number, 1);


  console.log("La suma es " + sum + ".");
  console.log("El producto es " + product + ".");
}


calculateSumAndProduct(numbers);