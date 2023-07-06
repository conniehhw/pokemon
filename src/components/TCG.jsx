import React from "react";
import Container from "react-bootstrap/Container";
import LoremIpsum from "react-lorem-ipsum";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Tcg = () => {
  return (
    <div>
      <Container>
        {/* <Row className=" py-4 my-4 border border-dark">
          <Col>1 of 3</Col>
          <Col xs={6}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row className="py-4 my-4 border border-dark">
          <Col>1 of 3</Col>
          <Col xs={5}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row> */}

        <Row
          className="py-4 my-4"
          style={{ backgroundColor: "#4DAD5B", borderRadius: "25px" }}
        >
          <Col sm={5} className="text-center border border-dark">
            <Image
              src="https://picsum.photos/200/300"
              fluid
              rounded
              className=""
            />
          </Col>
          <Col sm={7} className="text-left py-4 my-4 border border-dark">
            <h1 class="font-weight-light">Pokemon Cards</h1>
            <p>
              <LoremIpsum
                p={2}
                avgWordsPerSentence={5}
                avgSentencesPerParagraph={4}
              />
            </p>
          </Col>
        </Row>

        <Row
          className="py-4 my-4"
          style={{ backgroundColor: "#E6BC2F", borderRadius: "25px" }}
        >
          <Col sm={7} className="text-left py-4 my-4 border border-dark">
            <h1 class="font-weight-light">Pokemon Cards</h1>
            <p>
              <LoremIpsum
                p={1}
                avgWordsPerSentence={5}
                avgSentencesPerParagraph={4}
              />
            </p>
          </Col>
          <Col sm={5} className="text-center border border-dark">
            <Image
              src="https://picsum.photos/400/300"
              fluid
              rounded
              className=""
            />
          </Col>
        </Row>

        <Row
          className="py-4 my-4"
          style={{ backgroundColor: "#30A7D7", borderRadius: "25px" }}
        >
          <Col sm={4} className="text-center border border-dark">
            <Image
              src="https://picsum.photos/250/400"
              fluid
              rounded
              className=""
            />
          </Col>
          <Col sm={4} className="text-left py-4 my-4 border border-dark">
            <h1 class="font-weight-light">Pokemon Cards</h1>
            <p>
              <LoremIpsum
                p={1}
                avgWordsPerSentence={5}
                avgSentencesPerParagraph={4}
              />
            </p>
          </Col>
          <Col sm={4} className="text-center border border-dark">
            <Image
              src="https://picsum.photos/250/400"
              fluid
              rounded
              className=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Tcg;
