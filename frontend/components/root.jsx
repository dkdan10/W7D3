import React from 'react'
import { Provider } from 'react-redux'
import PokemonIndex from './pokemon/pokemon_index_container';
import { HashRouter, Route } from 'react-router-dom';
import PokemonDetail from './pokemon/pokemon_detail';


const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <Route path="/pokemon/:pokemonId" component={PokemonDetail}/>
      {/* <Route path="/pokemon/:pokemonId/item/:itemId" exact component={PokemonDetail} /> */}
      <Route path="/" component={PokemonIndex} />
    </HashRouter>
  </Provider>
)

export default Root