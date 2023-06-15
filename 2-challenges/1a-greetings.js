function greetings(names) {
  let message = names.map((el) => "Hello, " + el + "!");

  return message;
}

console.log(greetings(["Ash", "Beth", "Ciara"]));
