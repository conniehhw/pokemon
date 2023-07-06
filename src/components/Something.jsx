import React from "react";
import Container from "react-bootstrap/Container";
import OmdbContainer from "./OmdbContainer";

const Something = () => {
  return (
    <main className="App-home">
      <Container>
        <div>Something Page</div>
        <OmdbContainer />
      </Container>
    </main>
  );
};

export default Something;
