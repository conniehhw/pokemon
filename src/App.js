import pokemon_logo from "./pokemon_logo.jpg";
// import mySvg from "./logo.svg";
// import logo from "./logo.svg";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import Mad_libs from "./pages/Mad_libs";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";

function App() {
  const url = "https://pokeapi.co/api/v2/pokemon/jigglypuff";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
    console.log(data);
    console.log(data.name);
    console.log(data.abilities);
    // console.log(data.abilities[0].ability.name);
  }, []);

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/pokedex" element={<Pokedex />} />
          <Route exact path="/mad_libs" element={<Mad_libs />} />
          {/* <Navigate to="/" /> */}
        </Routes>
      </Router>
      <div className="App">
        {/* <header className="App-header"> */}
        <img src={pokemon_logo} className="App-logo1" alt="logo1" />
        {/* <img src="./logo.svg" className="App-logo1" alt="logo1" /> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Text <code>src/App.js</code> text text text.
  </p>*/}
        <p>Name: {data.name}</p>
        <p>Base Experience: {data.base_experience}</p>
        <p>Weight: {data.weight}</p>
        {/* <p>Abilities: {data.abilities[1].ability.name}</p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enter Here
        </a> */}
        {/* </header> */}
        {/* <Home /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;

/* <img src={logo} className="App-logo" alt="logo" /> */
