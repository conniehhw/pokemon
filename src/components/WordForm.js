// import { valueToObjectRepresentation } from "@apollo/client/utilities";
import React, { Component } from "react";

// render text inputs for all word objects in the array (plural noun, adjectives etc)
// calls on InputChange() when change event occurs and pass in appropriate arguments expected
class WordForm extends Component {
  onInputChange(event, key, index) {
    //   onInputChange(key, event, index) {
    // console.log(event.target.value);
    // console.log(key);
    // console.log(index);
    this.props.onInputChange(key, event.currentTarget.value, index);
  }

  // opens new empty array to be populated, grabs each word and push an input text,
  createAllInputs() {
    let output = [];

    for (let i = 0; i < this.props.words.length; i++) {
      let word = this.props.words[i];
      output.push(
        <div className="d-grid gap-0.5">
          <input
            onChange={(event) => this.onInputChange(event, word.key, i)}
            type="text"
            key={word.key}
            placeholder={word.label}
            style={{
              backgroundColor: "#FFDE00",
              borderRadius: "25px",
            }}
            className="p-3 bg-light border"
          ></input>

          <br></br>
        </div>
      );
    }

    return output;
  }

  render() {
    // function here
    console.log(this.props.words);

    return (
      <div>
        <br></br>
        <h2>Type in your words here in this form</h2>
        {this.createAllInputs()}
      </div>
    );
  }
}

export default WordForm;
