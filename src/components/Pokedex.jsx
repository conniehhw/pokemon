import React from "react";
import SearchForm from "./SearchForm";
// import PokemonsContainer from "./PokemonsContainer";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// function Pokemon(pokemon) {
//   return (
//     <div className="pokemon">
//       <div className="pokemon_name">
//         <p>{pokemon.name}</p>
//       </div>

//       <div className="pokemon_image">
//         <img src={pokemon.image} alt="" />
//       </div>

//       <div className="pokemon_abilitynames">
//         {pokemon.pokemon_v2_abilitynames.name}
//       </div>
//     </div>
//   );
// }

function Pokedex() {
  return (
    <main className="App-home">
      <div>Pokedex page</div>
      <SearchForm />
    </main>
  );
}

export default Pokedex;
