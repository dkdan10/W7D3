import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from '../../actions/pokemon_actions';
import {merge} from 'lodash'

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ALL_POKEMON: 
      return merge({}, state, action.pokemon)
    case RECEIVE_ONE_POKEMON:
      return merge({}, state, { [action.pokemon.pokemon.id]: action.pokemon.pokemon})
    default:
      return state
  }
}

export default pokemonReducer