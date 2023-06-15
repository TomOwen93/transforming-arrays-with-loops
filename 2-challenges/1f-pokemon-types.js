function pokemonTypes(pokemon) {
  let descriptions = pokemon.map(
    (el) => `${el.name} is a ${el.type} type pokemon`
  );

  return descriptions;
}

console.log(
  pokemonTypes([
    { name: "Bulbasaur", type: "Grass" },
    { name: "Charmander", type: "Fire" },
    { name: "Squirtle", type: "Water" },
  ])
);
