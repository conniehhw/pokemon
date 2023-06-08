import axios from "axios";

const search = async (query) =>
  // axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${query}&rating=pg`);
  axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`);

export default { search };