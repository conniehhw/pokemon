import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoremIpsum } from "react-lorem-ipsum";

const About = () => {
  return (
    <main className="App-home">
      <Container>
        <Row className="px-4 my-5">
          {/* px = padding, my=margin */}
          <Col sm={7}>
            <Image
              // src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg"
              src="https://picsum.photos/500/500"
              fluid
              rounded
              classNmame=""
            />
          </Col>
          <Col sm={5}>
            <h1 class="font-weigh-light">For the Littler Pokemon Fan</h1>
            <p class="mt-4">
              {/* mt= margin top */}
              {/* <LoremIpsum
                p={1}
                avgWordsPerSentence={6}
                avgSentencesPerParagraph={3}
              /> */}
            </p>
            <p>
              Hello! This site is designed for the littler pokemon fans AND
              their newbie parents caregivers unindated with Pokemon questions.
              Pokemon fans range from little ones to adults - this site has
              simple games and resources for the littler fan.
            </p>
            <br></br>
            <Button variant="outline-primary">Call to Action</Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default About;
