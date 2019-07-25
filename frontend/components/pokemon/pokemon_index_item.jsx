import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonIndexItem = (props) => {

  return (
      <li className="poke-listitem">
        <p>{props.pokemon.id}</p>
        <img className="indeximage" src={props.pokemon.image_url} alt="This is a picture" />
        <Link className="show_link" to={`/pokemon/${props.pokemon.id}`}>
          <h3>{props.pokemon.name}</h3>
        </Link>
      </li>
  )
}