// Display the value returned from getText() on MadLib object
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Story extends Component {
  render() {
    return (
      <Container>
        <div>
          <div
          // style={{
          //   backgroundColor: "#FFDE00",
          //   borderRadius: "25px",
          // }}
          // class="w-auto"
          >
            <Row
              className="p-2 border border-light"
              style={{
                backgroundColor: "#FFDE00",
                borderRadius: "25px",
              }}
            >
              <p>{this.props.text}</p>
            </Row>
          </div>
        </div>
      </Container>
    );
  }
}

export default Story;
