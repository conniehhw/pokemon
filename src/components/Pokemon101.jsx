import React from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";

const Pokemon101 = () => {
  return (
    // <main className="App-home">
    //   <div>Pokemon 101</div>
    <main className="App-home">
      <Container
        style={{
          backgroundColor: "#FFDE00",
          borderRadius: "25px",
        }}
        class="w-auto"
      >
        <Row className="px-4 my-2">
          <h2>Pokemon 101</h2>
        </Row>
      </Container>
      <Container className="py-5">
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is a Pokemon?</Accordion.Header>
            <Accordion.Body>
              A pokemon is a kind of creature. They can learn different moves.
              But the same species always have the same moves. Some pokemons
              have strong power; like Legendaries, Megas, Mythicals and Ultra
              beasts.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>What is a Poke Ball?</Accordion.Header>
            <Accordion.Body>
              A ball that catches pokemon, when you throw the ball. There are
              different kinds of poke balls; like the Quick ball, Ultra ball,
              Master ball and Apecorn ball.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>What are trainers? Professors?</Accordion.Header>
            <Accordion.Body>
              Basically, pokemon trainers are people that catch Pokemon, battle
              with Pokemom and research pokemon. You have to be at least 10
              years old to become a trainer. You will work with a professor, who
              will assign to you a partner; a pokemon. For example, you might
              have Charmander, Bulbasaur or Squirtle as your pokemon partner.
              Ash's partner is Pikachu.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>What are battles?</Accordion.Header>
            <Accordion.Body>
              Pokemons and their trainers compete in battles. These take place
              in different arenas. The trainer calls on a pokemon to battle
              against another trainer and pokemon pair. What you want to do, is
              pick a pokemon from your team that has abilities and attacks which
              can win over the opposing pokemon. When you start, you might say
              "Snorlex Go!"
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
              What are pokemon types and abilities?
            </Accordion.Header>
            <Accordion.Body>
              There are 18 types: Grass, Fire, Water, Electric, Steel, Psychic,
              Fighting, Fairy, Dark, Dragon, Ice, Poison, Bug, Rock, Flying,
              Ground, Ghost and Normal. Each type has their unique strengths and
              weaknesses.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              What are Evolutions? Why does Pikachu have 2 other names?
            </Accordion.Header>
            <Accordion.Body>
              Some pokemons can evolve 2 times. For instance, Pichu is basic,
              Pikachu is stage 1 and Raichu is stage 2. As it evolves from basic
              to stage 1 and 2, it becomes more powerful. However, some pokemons
              do not evolve.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>What are trainers? Professors?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
      //{" "}
    </main>
  );
};

export default Pokemon101;
