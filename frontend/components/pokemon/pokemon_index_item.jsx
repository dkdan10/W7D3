import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonIndexItem = (props) => {

  return (
      <li>
        <Link to={`/pokemon/${props.pokemon.id}`}>
          <h3>{props.pokemon.name}</h3>
        </Link>
        <img className="indeximage" src={props.pokemon.image_url} alt="This is a picture" />
      </li>
  )
}