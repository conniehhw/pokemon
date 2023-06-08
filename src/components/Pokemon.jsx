import React from "react";

export function Pokemon({ pokemon }) {
  return (
    <div className="pokemon">
      <div className="pokemon_name">
        <p>{pokemon.name}</p>
      </div>

      <div className="pokemon_image">
        <img src={pokemon.image} alt="image" />
      </div>

      <div className="pokemon_abilitynames">
        {pokemon.pokemon_v2_abilitynames.name}
      </div>
    </div>
  );
}
