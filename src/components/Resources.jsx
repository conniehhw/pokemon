import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { LoremIpsum } from "react-lorem-ipsum";

// need to group all card specific css into one class to declutter
// text-center bg-secondary text-white my-5 py-4 border border-dark

const Resources = () => {
  return (
    // <Container
    //   style={{
    //     backgroundColor: "#FFDE00",
    //   }}
    //   className="border border-dark"
    //   // class="w-auto"
    // >
    <div className="py-3 bg-light">
      {/* <Card className="text-center my-3 py-2 border border-dark">
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card> */}
      <Container className="py-5 border border-4 bg-dark">
        <p class="text-center text-white">
          <LoremIpsum
            p={1}
            avgWordsPerSentence={8}
            avgSentencesPerParagraph={4}
          />
        </p>
      </Container>

      {/* // Resource Options */}
      <Container className="py-2 px-2 my-3 border border-4 bg-primary">
        {/* <Row> */}
        <Col className="py-4 px-2">
          <Card style={{ width: "18rem" }} className="h-100">
            <Card.Img
              variant="top"
              src="https://picsum.photos/id/201/320/200"
            />
            <Card.Body>
              <Card.Title>FAQ Pokemon 101</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                type="button"
                class="btn btn-primary w-100"
                style={{ width: "16rem" }}
              >
                Go somewhere
              </Button>
            </Card.Footer>
            {/* </Card.Body> */}
          </Card>
        </Col>

        <Col className="py-4 px-2">
          <Card style={{ width: "18rem" }} className="h-100">
            <Card.Img
              variant="top"
              src="https://picsum.photos/id/201/320/200"
            />
            <Card.Body>
              <Card.Title>Pokemon Trading Card Game TCG </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                type="button"
                class="btn btn-primary w-100"
                style={{ width: "16rem" }}
              >
                Go somewhere
              </Button>
            </Card.Footer>
            {/* </Card.Body> */}
          </Card>
        </Col>

        <Col className="py-4 px-2">
          <Card style={{ width: "18rem" }} className="h-100">
            <Card.Img
              variant="top"
              src="https://picsum.photos/id/201/320/200"
            />
            <Card.Body>
              <Card.Title>The World of Pokemon</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                type="button"
                class="btn btn-primary w-100"
                style={{ width: "16rem" }}
              >
                Go somewhere
              </Button>
            </Card.Footer>
            {/* </Card.Body> */}
          </Card>
        </Col>

        <Col className="py-4 px-2">
          <Card style={{ width: "18rem" }} className="h-100">
            <Card.Img
              variant="top"
              src="https://picsum.photos/id/201/320/200"
            />
            <Card.Body>
              <Card.Title>Pokemon Shows</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                type="button"
                class="btn btn-primary w-100"
                style={{ width: "16rem" }}
              >
                Go somewhere
              </Button>
            </Card.Footer>
            {/* </Card.Body> */}
          </Card>
        </Col>

        <Col className="py-4 px-2">
          <Card style={{ width: "18rem" }} className="h-100">
            <Card.Img
              variant="top"
              src="https://picsum.photos/id/201/320/200"
            />
            <Card.Body>
              <Card.Title>Pokemon Cafe</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                type="button"
                class="btn btn-primary w-100"
                style={{ width: "16rem" }}
              >
                Go somewhere
              </Button>
            </Card.Footer>
            {/* </Card.Body> */}
          </Card>
        </Col>
        {/* </Row> */}
      </Container>
    </div>

    // </Container> "py-5 mt-5 bg-dark"
  );
};

export default Resources;
