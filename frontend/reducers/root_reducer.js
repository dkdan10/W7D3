import { combineReducers } from "redux";
import entities from "./entities/entities_reducer"


export default combineReducers({
  entities,
});

// const rootReducer = (state = {}, action) => {
  
//   return {
//     pokemon: {}

//   }
// }

// export default rootReducer