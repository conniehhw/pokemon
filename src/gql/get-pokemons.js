import gql from "graphql-tag";

export const GET_POKEMONS = gql`
  query Query_root($limit: Int) {
    pokemon_v2_pokemon(limit: $limit) {
      id
      name
    }
  }
`;
