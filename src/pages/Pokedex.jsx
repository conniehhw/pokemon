import React from "react";
import SearchForm from "./SearchForm.jsx";
// import React, { useState, useEffect } from "react";

const Pokedex = () => {
  return (
    <main className="App-home">
      <div>Pokedex Here</div>
      {/* <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Search Here
      </a> */}
      <SearchForm />
    </main>
  );
};

// function PokeApi() {
//   const url = "https://pokeapi.co/api/v2/pokemon/clefairy";
//   const [data, setData] = useState([]);

//   const fetchInfo = () => {
//     return fetch(url)
//       .then((res) => res.json())
//       .then((d) => setData(d));
//   };

//   useEffect(() => {
//     fetchInfo();
//     console.log(data);
//     console.log(data.name);
//     console.log(data.abilities);
//     console.log(data.abilities[0].ability.name);
//   }, []);

//   return (
//     <div>
//       <p>Name: {data.name}</p>
//       <p>Base Experience: {data.base_experience}</p>
//       <p>Weight: {data.weight}</p>
//       <p>Abilities: {data.abilities[0].ability.name}</p>
//     </div>
//   );
// }

export default Pokedex;
