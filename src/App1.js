import React from "react";
import "./App1.css";
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
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  // Navigate,
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home1 from "./components/Home1";
import Something from "./components/Something";
// import { Pokedex } from "./components/Pokedex";
// import { Madlibs } from "./components/Madlibs";

function App1() {
  return (
    // <BrowserRouter>
    <Router>
      <div className="App1">
        <header>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand>Navbar</Navbar.Brand>
              {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about">
                    About
                  </Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item
                      // as={Link}
                      // to="/pokedex"
                      href="#action/3.1"
                    >
                      Pokedex
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      // as={Link}
                      // to="/madlibs"
                      href="#action/3.2"
                    >
                      Mad Libs
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/something"
                      href="#action/3.3"
                    >
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      as={Link}
                      to="/contact"
                      href="#action/3.4"
                    >
                      Contact
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div>
            <Routes>
              <Route path="/about" element={<About />} />
              {/* <Route path="/pokedex" element={<Pokedex />} />
              <Route path="/madlibs" element={<Madlibs />} /> */}
              <Route path="/something" element={<Something />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Home1 />} />
            </Routes>
          </div>
        </header>
        <main>
          {/* <Home1 /> */}
          {/* <Container>
            <Row className="px-4 my-5">
              <Col sm={7}>
                <Image
                  // src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg"
                  src="https://picsum.photos/900/400"
                  fluid
                  rounded
                  classNmame=""
                />
              </Col>
              <Col sm={5}>
                <h1 class="font-weigh-light">Tagline</h1>
                <p class="mt-4">
                  <LoremIpsum
                    p={1}
                    avgWordsPerSentence={6}
                    avgSentencesPerParagraph={3}
                  />
                </p>
                <Button variant="outline-primary">Call to Action</Button>
              </Col>
            </Row>
            <Card className="text-center bg-secondary text-white my-5 py-4">
              <Card.Body>
                This is some text within a card body. This is some text within a
                card body.{" "}
              </Card.Body>
            </Card>
            <Row>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://picsum.photos/id/201/320/200"
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://picsum.photos/id/220/320/200"
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://picsum.photos/id/221/320/200"
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container> */}
        </main>
        <footer class="py-5 my-5 bg-dark">
          <Container className="px-4">
            <p class="text-center text-white">
              Copyright &copy; Your website 2023
            </p>
          </Container>
        </footer>
      </div>
    </Router>
  );
}

export default App1;
