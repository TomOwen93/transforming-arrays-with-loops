function invertNumbers(numbers) {
  let inverted = numbers.map((el) => -el);

  return inverted;
}

console.log(invertNumbers([1, -3, 2, 8, -10]));
console.log(invertNumbers([1, -3, 20.5, 8, -1000]));
