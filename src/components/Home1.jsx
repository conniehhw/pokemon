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
import "bootstrap/dist/css/bootstrap.min.css";
import { LoremIpsum } from "react-lorem-ipsum";

const Home1 = () => {
  return (
    <main className="App-home">
      <Container>
        <Row className="px-4 my-5">
          {/* px = padding, my=margin */}
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
              {/* mt= margin top */}
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Home1;
