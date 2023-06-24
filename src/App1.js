import React from "react";
import "./App.css";
// import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Image from "react-bootstrap/Image";
// import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
// import { LoremIpsum } from "react-lorem-ipsum";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  // Navigate,
} from "react-router-dom";

import pokemonlogo from "./components/pokemon-logo.png";
import Image from "react-bootstrap/Image";
import Home1 from "./components/Home1";
import About from "./components/About";
import Contact from "./components/Contact";

import Pokedex from "./components/Pokedex";
import MadLibs from "./components/MadLibs";
import Resources from "./components/Resources";
import Something from "./components/Something";
import TCG from "./components/TCG";

function App1() {
  const client = new ApolloClient({
    uri: "https://beta.pokeapi.co/graphql/v1beta",
    cache: new InMemoryCache(),
  });

  return (
    // <BrowserRouter>
    <Router>
      {/* <div className="App1"> */}
      <header>
        <Navbar
          bg="white"
          // variant="dark"
          expand="lg"
          sticky="top"
          className="border border-dark"
        >
          <Container className="border border-light">
            <Navbar.Brand>
              <Image
                src={pokemonlogo}
                width="320"
                fluid
                rounded
                // className="pokemon__logo"
                className="nav_logo"
              />
            </Navbar.Brand>
            {/* <Navbar.Brand>Pokemon</Navbar.Brand> */}
            {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              {/* <Nav className="me-auto"> */}
              <Nav className="ms-auto">
                {/* //positions navbar to the right */}
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <NavDropdown title="Explore" id="basic-nav-dropdown">
                  <NavDropdown.Item
                    as={Link}
                    to="/pokedex"
                    // href="#action/3.1"
                  >
                    Pokedex
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/madlibs"
                    // href="#action/3.2"
                  >
                    Mad Libs
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/resources"
                    // href="#action/3.3"
                  >
                    Resources for Parents and Caregivers
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={Link}
                    to="/something"
                    // href="#action/3.4"
                  >
                    Something
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/madlibs" element={<MadLibs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/something" element={<Something />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home1 />} />
          <Route path="/TCG" element={<TCG />} />
        </Routes>
      </div>

      {/* <main></main> */}
      <footer class="py-5 mt-5 bg-dark">
        <Container className="px-4 border border-light">
          <p class="text-center text-white">
            Copyright &copy; Your website 2023
          </p>
        </Container>
      </footer>
      {/* </div> */}
    </Router>
  );
}

export default App1;
