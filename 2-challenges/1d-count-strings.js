function countStrings(words) {
  let countArray = words.map((el) => el.length);
  return countArray;
}

console.log(countStrings(["one", "two", "three", "four"]));
