import React from 'react'
import { PokemonIndexItem } from './pokemon_index_item';


export default class PokemonIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAllPokemon()
  }

  render() {
    const {pokemon} = this.props
    const pokemonItems = pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />);

    // const pokemonLis = pokemon.map(poke => (
    //   <li key={poke.id}>
    //     {poke.name}
    //     <img className="indeximage" src={poke.image_url} alt="This is a picture"/>
    //   </li>
    // ))
    return (
      <ul className="pokemonindex">
        {pokemonItems}
      </ul>
    )
  }
}