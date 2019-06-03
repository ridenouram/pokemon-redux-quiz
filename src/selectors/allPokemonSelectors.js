export const selectAllPokemon = state => {
  console.log(state);
  return state.allPokemon.pokemonArr;
};
export const selectAllPokemonLoading = state => state.allPokemon.loading;
export const selectAllPokemonError = state => state.allPokemon.error;
