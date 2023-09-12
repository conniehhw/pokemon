import React from "react";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";

const Centres = () => {
  return (
    <main className="App-home">
      <Container>
        <Row className="py-4 my-4">
          {/* <div>Cafe page - coming soon</div> */}
          <p>
            A Pokémon Center is an official Pokémon shop where players can get
            the latest infromation about everything game-related and also
            purchase Pokemon exclusive items.
          </p>
          <p>
            <Badge bg="primary">Info Coming Soon!</Badge>
          </p>
        </Row>
      </Container>
    </main>
  );
};

export default Centres;
