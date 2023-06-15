function onlyInitials(names) {
  let initials = names.map(
    (el, index, arr) => el[0] + "." + el[el.indexOf(" ") + 1] + "."
  );

  return initials;
}

console.log(onlyInitials(["Ash Ketchum", "Lucy Heartfilia", "Yugi Moto"]));
