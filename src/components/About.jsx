import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Pokemonfans from "./pokemon_fans.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoremIpsum } from "react-lorem-ipsum";

const About = () => {
  return (
    <main className="App-home">
      <Container>
        <Row className="py-4 my-4">
          {/* px = padding, my=margin */}
          <Col sm={6} className="text-center">
            <Image
              // src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg"
              // src="https://picsum.photos/500/500"
              src={Pokemonfans}
              fluid
              rounded
              className=""
            />
          </Col>
          <Col sm={6}>
            <h2 class="font-weigh-light">Pokemon for Little Ones</h2>
            <p class="mt-4">
              {/* mt= margin top */}
              {/* <LoremIpsum
                p={1}
                avgWordsPerSentence={6}
                avgSentencesPerParagraph={3}
              /> */}
            </p>
            <p>
              Hello! This website is designed for the younger Pokémon fans, ages
              5 - 8. It features activities such as games, searching the
              pokedex, learning to draw their fav characters and more.
              <p>
                Accompanying these activities is also a guide for parents, to
                arm you with the knowledge you need to accompany your little
                ones as they go on their first Pokemon journey.
              </p>
            </p>
            <br></br>
            <Button variant="outline-primary">Let's Go!</Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default About;
