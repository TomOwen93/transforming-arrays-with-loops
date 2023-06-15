function onlyInitials(names) {
  let initials = [];
  let splitNames = names.slice();
  console.log(splitNames);

  for (let name of names) {
    initials.push(name[0] + "." + name[name.indexOf(" ") + 1] + ".");
  }
  return initials;
}

console.log(onlyInitials(["Ash Ketchum", "Lucy Heartfilia", "Yugi Moto"]));
