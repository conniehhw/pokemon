// import React from "react";
// // import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// // import SearchForm from "./SearchForm";
// // import PokemonsContainer from "./PokemonsContainer";

// // export function PokemonsContainer() {
// //   const { data: { pokemon_v2_pokemon = [] } = {} } = useQuery(GET_POKEMONS, {
// //     variables: { limit: 9 },
// //   });

// //   return (
// //     <div className="container">
// //       {pokemon_v2_pokemon &&
// //         pokemon_v2_pokemon.map((pokemon) => (
// //           <Pokemon key={pokemon.name} pokemon={pokemon} />
// //         ))}
// //     </div>
// //   );
// // }

// export function Pokedex() {
//   const client = new ApolloClient({
//     uri: "https://beta.pokeapi.co/graphql/v1beta",
//     // uri: "https://graphql-pokeapi.vercel.app/api/graphql",

//     cache: new InMemoryCache(),
//   });

//   return (
//     <div>
//       <main className="App-home">
//         {/* <ApolloProvider client={client}> */}
//         <div>Pokedex page</div>
//         {/* <SearchForm /> */}
//         {/* <PokemonsContainer /> */}
//         {/* </ApolloProvider> */}
//       </main>
//     </div>
//   );
// }

import React from "react";
import { PokemonsContainer } from "./PokemonsContainer";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const Pokedex = () => {
  const client = new ApolloClient({
    uri: "https://beta.pokeapi.co/graphql/v1beta",
    cache: new InMemoryCache(),
  });

  return (
    <main className="App-home">
      <div>Pokedex page</div>
      <ApolloProvider client={client}>
        <PokemonsContainer />
      </ApolloProvider>
    </main>
  );
};

export default Pokedex;
