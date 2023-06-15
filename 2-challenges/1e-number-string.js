function numberString(arr) {
  let outputArray = arr.map((el) => ({ asNumber: el, asString: `${el}` }));
  return outputArray;
}

console.log(numberString([4, -3.2]));
