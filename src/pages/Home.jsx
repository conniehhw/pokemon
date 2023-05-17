import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="App-home">
      <div>Hello This is home page</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pokedex">Pokedex</Link>
        </li>
        <li>
          <Link to="/mad_libs">Mad Libs</Link>
        </li>
      </ul>
      {/* <a
        className="App-link"
        href="Pokedex"
        // href="https://google.ca"
        target="_blank"
        rel="noopener noreferrer"
      >
        Enter Here
      </a> */}
    </main>
  );
};

export default Home;
