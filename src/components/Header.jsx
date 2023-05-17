import React from "react";
import pokemon_logo from "./pokemon_logo.jpg";

const Header = () => {
  return (
    <header className="App-header">
      <div>Hello This is the real header</div>
      <img src={pokemon_logo} className="App-logo" alt="logo" />
    </header>
  );
};

export default Header;
