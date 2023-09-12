import React from "react";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";

const Media = () => {
  return (
    <main className="App-home">
      <Container>
        <Row className="py-4 my-4">
          {/* <div>Cafe page - coming soon</div> */}
          <p>
            Since the start of the original Pokemon Trading Card Game, it has
            expanded to multiple video games, 25 seasons in the television
            anime, 23 animated movies on top of live events globally.
          </p>
          <p>
            <Badge bg="primary">Info Coming Soon!</Badge>
          </p>
        </Row>
      </Container>
    </main>
  );
};

export default Media;
