import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from "./store/store"
import { fetchAllPokemon, receiveAllPokemon } from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root';
import { fetchAllItems } from './actions/item_actions';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root")
  const store = configureStore();

  // TESTING...
  window.dispatch = store.dispatch
  window.getState = store.getState

  window.receiveAllPokemon = receiveAllPokemon
  window.fetchAllPokemon = fetchAllPokemon

  window.selectAllPokemon = selectAllPokemon
  window.fetchAllItems = fetchAllItems
  // ...TESTING

  // store.dispatch(fetchAllItems())

  ReactDOM.render(<Root store={store}/>, root)
})