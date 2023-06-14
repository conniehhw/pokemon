import React from "react";
import { useQuery } from "@apollo/client";
import { Pokemon } from "./Pokemon";
import { GET_POKEMONS } from "../gql/get-pokemons";

export function PokemonsContainer() {
  const { data: { pokemon_v2_pokemon = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { limit: 6 },
  });

  return (
    <div className="container">
      {pokemon_v2_pokemon &&
        pokemon_v2_pokemon.map((pokemon) => (
          <Pokemon key={pokemon.name} pokemon={pokemon} />
        ))}
    </div>
  );
}
