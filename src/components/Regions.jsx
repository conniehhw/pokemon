import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
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
    <Container className="py-5 border border-4 bg-dark">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <Card>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Img
              variant="bottom"
              className="d-block w-100"
              // src="holder.js/800x400?text=First slide&bg=373940"
              // src="holder.js/100px180"
              src="https://picsum.photos/700/200"
              style={{ width: 700, height: 200 }}
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
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            alt="Second slide"
            src="https://picsum.photos/700/200"
            style={{ width: 700, height: 200 }}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            alt="Third slide"
            src="https://picsum.photos/700/200"
            style={{ width: 700, height: 200 }}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Regions;
