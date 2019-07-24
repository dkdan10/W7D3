import * as APIUtil from '../util/api_util'
export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON"
export const RECEIVE_ONE_POKEMON = "RECEIVE_ONE_POKEMON"


export const fetchAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon()
            .then((allPokemon) => {
              return dispatch(receiveAllPokemon(allPokemon))
            })
}

export const fetchOnePokemon = (id) => (dispatch) => {
  return APIUtil.fetchOnePokemon(id)
    .then((pokemon) => {
      return dispatch(receiveOnePokemon(pokemon))
    })
} 

export const receiveAllPokemon = (pokemon) => {
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon
  }
}

export const receiveOnePokemon = (pokemon) => {
  return {
    type: RECEIVE_ONE_POKEMON,
    pokemon
  }
}