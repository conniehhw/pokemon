import React from "react";
import { useState, useEffect } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";
import { PokemonsContainer } from "./PokemonsContainer";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Pokemon } from "./Pokemon";
import logo from "./1.png";

const OmdbContainer = () => {
  // Set state for the search result and the search query
  const [result, setResult] = useState({}); //empty object
  const [search, setSearch] = useState(""); //empty string

  // When the search form is submitted, use the API.search method to search for the movie(s)
  const searchMovie = (query) =>
    API.search(query)
      .then((res) => setResult(res.data))
      .catch((err) => console.log(err));

  // When the component loads, use the API.search method to render a default search result
  // The empty optional array [] will cause the hook to only run one time after the component loads
  // Refer to https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
  useEffect(() => {
    searchMovie("The Matrix");
  }, []);

  // Handler for input changes to the search form
  const handleInputChange = (e) => setSearch(e.target.value);
  // const handleInputChange = (e) => console.log(e.target.value);

  // Handler for what happens when the search form is submitted
  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchMovie(search);
  };

  // Destructure the result object to make the code more readable, assign them to empty strings to start
  const {
    Title = "",
    Name = "",
    Poster = "",
    Director = "",
    Genre = "",
    Released = "",
  } = result;
  console.log(result);

  // const Pokedex = () => {
  const client = new ApolloClient({
    uri: "https://beta.pokeapi.co/graphql/v1beta",
    cache: new InMemoryCache(),
  });

  /* Fall back to default header if `Title` is undefined
  Does `Title` exist? If so, render the `MovieDetail` card 
  If not, render a different header */

  return (
    <Container>
      <Row>
        <Col size="md-8">
          <Card heading={Title || "Search for a Pokemon to Begin"}>
            {Title ? (
              <MovieDetail
                name={Name}
                title={Title}
                src={Poster}
                director={Director}
                genre={Genre}
                released={Released}
                // types={Types}
              />
            ) : (
              <h3>No Results to Display</h3>
            )}
            <div className="pokemon">
              <div className="pokemon_name">
                <p>Name: {result.name}</p>
              </div>
              <div className="pokemon_id">
                <p>Id: {result.id}</p>
              </div>

              <p>Id: {result.id}</p>
              <h3>Name: {result.name}</h3>
              {/* <h3>Name: {result.sprites.front_default}</h3> */}

              <img src={logo} alt="logo" />
              <h3>Type: {result.types[0].type.name}</h3>

              <h3>Ability: {result.abilities[0].ability.name}</h3>
              <h3>Moves: {result.moves[0].move.name}</h3>
            </div>
            {/* <img
              alt={result}
              className="img-fluid"
              src={result.images.original.url}
            /> */}
          </Card>
        </Col>
        <Col size="md-4">
          <Card heading="Search">
            <SearchForm
              value={search}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <ApolloProvider client={client}>
          <PokemonsContainer />
        </ApolloProvider>
      </Row>
    </Container>
  );
};

export default OmdbContainer;
