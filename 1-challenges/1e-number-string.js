function numberString(arr) {
  let outputArray = [];

  for (let number of arr) {
    outputArray.push({ asNumber: number, asString: `${number}` });
  }

  return outputArray;
}

console.log(numberString([4, -3.2]));
