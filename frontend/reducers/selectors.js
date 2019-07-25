
export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon)
}


export const selectOnePokemon = (state, id) => {
  const pokemonState = state.entities.pokemon[id]
  return pokemonState ? pokemonState : {}
}

export const selectAPokemonsItems = (state, pokemonId) => {
  // debugger
  return Object.values(state.entities.items).filter(item => item.pokemon_id === parseInt(pokemonId))
}