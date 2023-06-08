import gql from "graphql-tag";

export const GET_POKEMONS = gql`
  query pokemon_v2_ability($limit: Int) {
    pokemon_v2_ability(limit: $limit) {
      name
      is_main_series
      pokemon_v2_abilitynames {
        language_id
        name
      }
    }
  }
`;
