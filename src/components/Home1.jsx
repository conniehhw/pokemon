import React from "react";
import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Welcome from "./welcome-group.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoremIpsum } from "react-lorem-ipsum";

const Home1 = () => {
  return (
    <main className="App-home">
      <Container
        style={{
          backgroundColor: "blue",
        }}
      >
        <Row className="px-4 my-5 border border-dark">
          {/* px = padding, my=margin */}
          <Col sm={7} className="border border-dark">
            {/* className="justify-content-md-center"> */}
            <Image
              // src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg"
              // src="https://picsum.photos/900/400"
              src={Welcome}
              // alt="welcome"
              fluid
              rounded
              className=""
            />
            {/* mt-4 me-4 ms-4 */}
          </Col>
          <Col sm={5} className="border border-dark text-white">
            <h1 class="font-weigh-light" className="mt-4">
              Tagline
            </h1>
            <p class="mt-4">
              {/* mt= margin top */}
              <LoremIpsum
                p={1}
                avgWordsPerSentence={6}
                avgSentencesPerParagraph={4}
              />
            </p>
            <br></br>
            <Button variant="warning">Call to Action</Button>
          </Col>
        </Row>
      </Container>

      <Container
        style={{
          backgroundColor: "blue",
        }}
        class="mx-auto"
      >
        <div className="justify-content-evenly flex-wrap">
          {/* <Card className="text-center bg-secondary text-white my-5 py-4">
            <Card.Body>
              This is some text within a card body. This is some text within a
              card body.{" "}
            </Card.Body>
          </Card> */}
          <Row className="border border-dark">
            <Col className="border border-dark d-flex justify-content-center">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/id/201/320/200"
                />
                <Card.Body>
                  <Card.Title>For Parents - Caregivers</Card.Title>
                  <Card.Text>
                    My child loves pokemon but I have no idea what it is? Help
                    please! List: What are pokemons? What is the trading card
                    game? There is a cartoon? What are trainers?
                  </Card.Text>
                  <br></br>
                  {/* <div className="text-center"> */}
                  <Button
                    type="button"
                    class="btn btn-primary w-100"
                    style={{ width: "15rem" }}
                  >
                    Go somewhere
                  </Button>
                  {/* </div> */}
                </Card.Body>
              </Card>
            </Col>
            <Col className="border border-dark d-flex justify-content-center">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/id/220/320/200"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <br></br>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="border border-dark d-flex justify-content-center">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/id/221/320/200"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <br></br>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </main>
  );
};

export default Home1;
