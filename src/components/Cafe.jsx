import React from "react";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";

const Cafe = () => {
  return (
    <main className="App-home">
      <Container>
        <Row className="py-4 my-4">
          {/* <div>Cafe page - coming soon</div> */}
          <p>
            You can enjoy a Gengar's Confuse Ray Smoothie or Snorlax's Tummy
            Filling Nap Lunch Plate, surrounded by your favorite Pokémon, at one
            of two official Pokemon Cafes.
          </p>
          <p>
            <Badge bg="primary">Info Coming Soon!</Badge>
          </p>
        </Row>
      </Container>
    </main>
  );
};

export default Cafe;
