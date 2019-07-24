import React from 'react'
import { connect } from 'react-redux'
import { selectAllPokemon } from '../../reducers/selectors';
import { fetchOnePokemon } from '../../actions/pokemon_actions';


class PokemonDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchOnePokemon(this.props.match.params.pokemonId)
  }

  render() {

    const pokemon = this.props.pokemon[this.props.match.params.pokemonId] || "No selected poke"
    return (
      <>
        <h1 key="1">{pokemon.id}</h1>
        <h1 key="16">{pokemon.name}</h1>
        <h1 key="15">{pokemon.attack}</h1>
        <h1 key="14">{pokemon.defense}</h1>
        <h1 key="13">{pokemon.image_url}</h1>
        <h1 key="12">{pokemon.poke_type}</h1>
      </>
    )
  }
}

const mSP = (state) => ({
  pokemon: selectAllPokemon(state)
});

const mDP = (dispatch) => ({
  fetchOnePokemon: (id) => dispatch(fetchOnePokemon(id))
})

export default connect(mSP, mDP)(PokemonDetail)