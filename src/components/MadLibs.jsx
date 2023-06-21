// import { render } from "@testing-library/react";
import React, { Component } from "react";
import WordForm from "./WordForm.js";
import Story from "./Story.js";
import MadLibsGen from "./MadLibsGen.js";

class MadLibs extends Component {
  state = {
    madlibsgen: MadLibsGen,
    selectedMadLibGen: MadLibsGen[0],
  };

  // state = {
  //   selectedMadLibGen: null,
  // };

  // Override current state (setState, newState?) spread operator line 17 = lines 9 - 10
  onWordInputChange = (key, value, index) => {
    console.log(key);
    console.log(value);
    console.log(index);

    // const newState is a copy of the oldState and spreading it across, newState has selected Madlibs (which story)
    const newState = {
      ...this.state,
    };
    newState.selectedMadLibGen.words[index] = {
      ...newState.selectedMadLibGen.words[index],
      value: value,
    };
    this.setState(newState);
  };

  // function that displays the story only if all values are present/inputted
  isStoryComplete() {
    for (let i = 0; i < this.state.selectedMadLibGen.words.length; i++) {
      if (!this.state.selectedMadLibGen.words[i].value) {
        return false;
      }
    }
    return true;
  }

  // Create select dropdown to allow user to switch selected MadLib to play
  // map through the array in this.state.madlibsgen - gather titles, display as dropdown <options>
  // using onChange event, set the selectedMadLibGen object

  createMadlibDropdown() {
    let output = [];
    for (let i = 0; i < this.state.madlibsgen.length; i++) {
      output.push(<option value={i}>{this.state.madlibsgen[i].title}</option>);
    }
    return output;
  }

  changeMadlibSelection(event) {
    // console.log(event.target.value);
    this.setState({
      selectedMadLibGen: MadLibsGen[event.target.value],
    });
  }

  // upon selection of Madlib (onChange), this.changeMadlibSelection is called
  render() {
    console.log(this.state.selectedMadLibGen);

    return (
      <div className="MadLibs">
        <h1>Mad Libs page</h1>
        <h2>Select a Madlib</h2>

        <select onChange={(e) => this.changeMadlibSelection(e)}>
          {this.createMadlibDropdown()}
          {/* {" "} */}
        </select>

        {/* {!this.state.selectedMadLibGen ? this.createMadlibDropdown() : null} */}
        {/* // if has someting selcted then don'm tdo anything otherwise create the drop down */}

        <WordForm
          words={this.state.selectedMadLibGen.words}
          onInputChange={this.onWordInputChange}
        />
        {this.isStoryComplete() && (
          <Story text={this.state.selectedMadLibGen.getText()} />
        )}
      </div>
    );
  }
}

export default MadLibs;
