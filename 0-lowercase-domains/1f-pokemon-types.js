function pokemonTypes(pokemon) {
  let descriptions = [];

  console.log(pokemon);
  for (let key of pokemon) {
    let { name, type } = key;
    console.log(name, type);
    descriptions.push(`${name} is a ${type} type pokemon`);
  }

  return descriptions;
}

console.log(
  pokemonTypes([
    { name: "Bulbasaur", type: "Grass" },
    { name: "Charmander", type: "Fire" },
    { name: "Squirtle", type: "Water" },
  ])
);
