import React from "react";
import { useQuery } from "@apollo/client";
import { Pokemon } from "./Pokemon";
import { GET_POKEMONS } from "../gql/get-pokemons";

export function PokemonsContainer() {
  const { data: { pokemon_v2_ability = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { limit: 5 },
  });

  return (
    <div className="container">
      {pokemon_v2_ability &&
        pokemon_v2_ability.map((pokemon) => (
          <Pokemon key={pokemon.name} pokemon={pokemon} />
        ))}
    </div>
  );
}
