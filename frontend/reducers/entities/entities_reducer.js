import { combineReducers } from "redux";
import pokemon from './pokemon_reducer'

const entitiesReducer = combineReducers({
  pokemon
})

export default entitiesReducer