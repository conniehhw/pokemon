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
        <div>
          <input
            onChange={(event) => this.onInputChange(event, word.key, i)}
            type="text"
            key={word.key}
            placeholder={word.label}
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
        <h1>This is the word form</h1>
        {this.createAllInputs()}
      </div>
    );
  }
}

export default WordForm;
