function greetings(names) {
  let message = [];

  for (let name of names) {
    message.push("Hello, " + name + "!");
  }

  return message;
}

console.log(greetings(["Ash", "Beth", "Ciara"]));
