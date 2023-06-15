function countStrings(words) {
  let countArray = [];
  for (let word of words) {
    countArray.push(word.length);
  }

  return countArray;
}

console.log(countStrings(["one", "two", "three", "four"]));
