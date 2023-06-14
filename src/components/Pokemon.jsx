import React from "react";
import logo from "./1.png";

// object holding all the data for pokemon -> destructure here
export function Pokemon({ pokemon }) {
  return (
    <div className="pokemon">
      <div className="pokemon__name">
        <p>{pokemon.name}</p>
      </div>
      <div className="pokemon__id">
        <p>Id: {pokemon.id}</p>
      </div>
      <div className="pokemon__image">
        <img src={pokemon.images} alt={pokemon.name} />
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}
