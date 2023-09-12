import React from "react";
import { Link } from "react-router-dom";
import TCG from "./TCG";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import pokemon101 from "./pokemon-101.png";
import tradingcards from "./trading-cards.png";
import kanto from "./kanto.png";
import pokemoncafe from "./pokemon-cafe.png";
import pokemoncentre from "./pokemon-centre.png";
import pokemonvggame from "./pokemon-vgame.png";
import { LoremIpsum } from "react-lorem-ipsum";

// need to group all card specific css into one class to declutter
// text-center bg-secondary text-white my-5 py-4 border border-dark

const Resources = () => {
  return (
    <div className="py-3 bg-light">
      <Container
        style={{
          backgroundColor: "#FFDE00",
          borderRadius: "25px",
        }}
        class="w-auto"
      >
        <Row className="px-4 my-1">
          <h3>Resources for Parents and Guardians</h3>
        </Row>
      </Container>
      {/* <Container
        className="py-3 border border-4 border-light bg-dark"
        style={{ borderRadius: "25px" }}
      >
        <p class="text-center text-white">
          Resources for Parents And Guardians
          <LoremIpsum
            p={1}x
            avgWordsPerSentence={8}
            avgSentencesPerParagraph={4}
          />
        </p>
      </Container> */}

      {/* // Resource Options */}
      <Container className="py-2 px-2 my-3 border border-4">
        {/* <Row> */}
        <Col className="py-4 px-2">
          <Card style={{ width: "18rem" }} className="h-100">
            <Card.Img variant="top" src={pokemon101} />
            <Card.Body>
              <Card.Title>Pokemon 101</Card.Title>
              <Card.Text>
                A parent's guide to Pokemon. What are pokemon?
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                type="button"
                class="btn btn-primary w-100"
                style={{ width: "16rem" }}
                as={Link}
                to="/pokemon101"
              >
                Go learn about Pokemon
              </Button>
            </Card.Footer>
            {/* </Card.Body> */}
          </Card>
        </Col>

        <Col className="py-4 px-2">
          <Card style={{ width: "18rem" }} className="h-100">
            <Card.Img variant="top" src={tradingcards} />
            <Card.Body>
              <Card.Title>Pokemon Trading Card Game TCG </Card.Title>
              <Card.Text>
                From collecting cards, types of cards and building decks - a
                guide for how to play the Pokemon Trading Card Game.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                type="button"
                class="btn btn-primary w-100"
                style={{ width: "16rem" }}
                as={Link}
                to="/tcg"
              >
                Go learn about Cards
              </Button>
            </Card.Footer>
            {/* </Card.Body> */}
          </Card>
        </Col>

        <Col className="py-4 px-2">
          <Card style={{ width: "18rem" }} className="h-100">
            <Card.Img variant="top" src={kanto} />
            <Card.Body>
              <Card.Title>Pokemon Universe</Card.Title>
              <Card.Text>
                9 regions in Pokemon world; Kanto, Johto, Hoenn, Sinnoh, Unova,
                Kalos, Alola, Galar, and Paldea.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                type="button"
                class="btn btn-primary w-100"
                style={{ width: "16rem" }}
                as={Link}
                to="/regions"
              >
                Go see the maps
              </Button>
            </Card.Footer>
            {/* </Card.Body> */}
          </Card>
        </Col>

        <Col className="py-4 px-2">
          <Card style={{ width: "18rem" }} className="h-100">
            <Card.Img variant="top" src={pokemonvggame} />
            <Card.Body>
              <Card.Title>Pokemon Media</Card.Title>
              <Card.Text>
                From books, television shows, films to video games - there are
                plently of ways to explore the Pokemon Universe.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                type="button"
                class="btn btn-primary w-100"
                style={{ width: "16rem" }}
                as={Link}
                to="/media"
              >
                Go Meet the Cast
              </Button>
            </Card.Footer>
            {/* </Card.Body> */}
          </Card>
        </Col>

        <Col className="py-4 px-2">
          <Card style={{ width: "18rem" }} className="h-100">
            <Card.Img variant="top" src={pokemoncentre} />
            <Card.Body>
              <Card.Title>Pokemon Centres</Card.Title>
              <Card.Text>
                What is the difference between Pokemon Centres and Pokemon
                Stores?
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                type="button"
                class="btn btn-primary w-100"
                style={{ width: "16rem" }}
                as={Link}
                to="/centres"
              >
                Go inside
              </Button>
            </Card.Footer>
          </Card>
        </Col>

        <Col className="py-4 px-2">
          <Card style={{ width: "18rem" }} className="h-100">
            <Card.Img variant="top" src={pokemoncafe} />
            <Card.Body>
              <Card.Title>Pokemon Cafe</Card.Title>
              <Card.Text>
                Eat, drink and be merry. Welcome to the first-ever official
                Pokémon Cafe.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                type="button"
                class="btn btn-primary w-100"
                style={{ width: "16rem" }}
                as={Link}
                to="/cafe"
              >
                Go find out more
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Container>
      <Container>
        <Row className="px-4 my-2">
          <h6>
            A special call out 'Thank You' to trainer Ryan for sharing his
            expertise for this section!
          </h6>
        </Row>
      </Container>
    </div>
  );
};

export default Resources;
