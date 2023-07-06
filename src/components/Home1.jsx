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
import Welcome from "./Pikachu-Ash1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoremIpsum } from "react-lorem-ipsum";

const Home1 = () => {
  return (
    <main className="App-home">
      <Container
        style={{
          backgroundColor: "#FFDE00",
          borderRadius: "25px",
        }}
        class="w-auto"
      >
        <Row className="px-4 my-2">
          {/* border border-dark px = padding, my=margin */}

          <Col sm={5} className="text-black">
            <h1 class="font-weigh-light" className="mt-4">
              Welcome!
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
            <Button variant="primary">Call to Action</Button>
          </Col>

          <Col sm={7} className="text-center">
            {/* className="justify-content-md-center"> */}
            <Image
              // src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg"
              // src="https://picsum.photos/900/400"
              src={Welcome}
              style={{ borderRadius: "25px" }}
              // alt="welcome"
              fluid

              // className="main-pic"
            />
            {/* mt-4 me-4 ms-4 */}
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Home1;
