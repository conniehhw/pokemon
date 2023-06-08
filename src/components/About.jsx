import React from "react";
import { PokemonsContainer } from "./PokemonsContainer";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const About = () => {
  const client = new ApolloClient({
    uri: "https://beta.pokeapi.co/graphql/v1beta",
    cache: new InMemoryCache(),
  });

  return (
    <main className="App-home">
      <div>About page</div>
      <ApolloProvider client={client}>
        <PokemonsContainer />
      </ApolloProvider>
    </main>
  );
};

export default About;
