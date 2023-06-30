import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import kanto from "./kanto.png";
import johto from "./Johto.png";
import hoenn from "./Hoenn.png";

// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// const Regions = () => {
//   return (
//     <main className="App-home">
//       <Container>
//         <div className="">Regions Page</div>
//       </Container>
//     </main>
//   );
// };

function Regions() {
  return (
    <Container className="pt-5 pb-5">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <Card className="">
            <Card.Body>
              <Card.Text>
                <small>
                  The Kanto region is based on the real Kantō region (関東, east
                  of the barrier) in Japan. Kanto is modern and technological.
                  Professor Oak is the resident Pokémon Professor and gives
                  Pokémon Trainers a choice between Bulbasaur, Charmander, or
                  Squirtle as their starter Pokémon. wiki Squirtle as their
                  starter Pokémon. wiki
                </small>
              </Card.Text>
            </Card.Body>
            <Card.Img
              variant="bottom"
              className="d-block w-100 border-dark"
              // src="holder.js/800x400?text=First slide&bg=373940"
              // src="holder.js/100px180"
              // src="https://picsum.photos/500/350
              src={kanto}
              style={{ width: 500, height: 350 }}
              // alt="welcome"
              alt="First slide"
              fluid
              rounded
            />
          </Card>

          {/* <img
            className="d-block w-100"
            // src="holder.js/800x400?text=First slide&bg=373940"
            src="https://picsum.photos/id/300/200"
            alt="First slide"
            fluid
            rounded
          /> */}
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Card className="">
            <Card.Body>
              <Card.Text>
                <small>
                  Johto is based on the real Kansai region in Japan, one of two
                  most populous areas of Honshū, the largest island of Japan,
                  and much like Johto and Kanto, represent a harmony of
                  contrasting cultures living together. Professor Elm offers
                  either Chikorita, Cyndaquil, or Totodile to beginning Pokémon
                  Trainers.wiki
                </small>
              </Card.Text>
            </Card.Body>
            <Card.Img
              variant="bottom"
              className="d-block w-100 border-dark"
              alt="Second slide"
              src={johto}
              style={{ width: 500, height: 350 }}
            />
          </Card>
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Card className="">
            <Card.Body>
              <Card.Text>
                <small>
                  Hoenn is inspired by the real-world Japanese main island of
                  Kyushu, rotated 90° counterclockwise. The names of most of the
                  cities in Hoenn are made of two words put together like
                  "Little Root", "Fort Tree", etc. Professor Birch offers the
                  starter Pokémon known as Treecko, Torchic, or Mudkip to
                  Trainers beginning their journey .wiki
                </small>
              </Card.Text>
            </Card.Body>
            <Card.Img
              variant="bottom"
              className="d-block w-100 border-light"
              alt="Second slide"
              src={hoenn}
              style={{ width: 500, height: 350 }}
            />
          </Card>
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Regions;
