// Display the value returned from getText() on MadLib object
import React, { Component } from "react";

class Story extends Component {
  render() {
    return (
      <div>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Story;
