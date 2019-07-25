import { RECEIVE_ALL_ITEMS } from '../../actions/item_actions';
import { merge } from 'lodash'
import { RECEIVE_ONE_POKEMON } from '../../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ALL_ITEMS:
      return merge({}, action.items)
    case RECEIVE_ONE_POKEMON:
      return merge({}, state, action.pokemon.items)
    default:
      return state
  }
}

export default itemsReducer