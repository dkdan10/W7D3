import React from 'react'
import { connect } from 'react-redux'
import { selectOnePokemon, selectAPokemonsItems } from '../../reducers/selectors';
import { fetchOnePokemon } from '../../actions/pokemon_actions';
import {Link, Route} from "react-router-dom"
import ItemDetail from "../items/item_detail"

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchOnePokemon(this.props.match.params.pokemonId)
  }

  componentDidUpdate (oldProps) {
    if (this.props.match.params.pokemonId !== oldProps.match.params.pokemonId){
      this.props.fetchOnePokemon(this.props.match.params.pokemonId)
    }
  }

  render() {
    const {pokemon, items} = this.props
  
    const itemLis = items.map(item => {
      return <div key={item.id} className="item">
        <Link to={`/pokemon/${pokemon.id}/item/${item.id}`}> <img className="item-image" src={item.image_url} alt="Item Image" /></Link>
      </div>  
    })
    // debugger
    // const itemDetailComponent = selectedItem ? <ItemDetail item={selectedItem} /> : null

    return (
      <div className="poke-detail">
        <Link to="/"><h1>Home</h1></Link>
        <h1 key="1">No.: {pokemon.id}</h1>
        <h1 key="16">Name: {pokemon.name}</h1>
        <h1 key="15">Attacks: {pokemon.attack}</h1>
        <h1 key="14">Defense: {pokemon.defense}</h1>
        <h1 key="12">Type: {pokemon.poke_type}</h1>
        <img className = "poke-detailimg" src={ pokemon.image_url} alt="This is a picture of a pokemon" />
        <div className="items">
          <ul className="item-specs">{itemLis}</ul>
          {/* {itemDetailComponent} */}
          <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetail}/>
        </div>

      </div>
    )
  }
}

const mSP = (state, ownProps) => {
  const pokemonId = ownProps.match.params.pokemonId
  return {
    pokemon: selectOnePokemon(state, pokemonId),
    items: selectAPokemonsItems(state, pokemonId)
  }
};

const mDP = (dispatch) => ({
  fetchOnePokemon: (id) => dispatch(fetchOnePokemon(id))
})

export default connect(mSP, mDP)(PokemonDetail)
