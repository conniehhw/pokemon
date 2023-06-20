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

  // Override current state (setState, newState?) spread operator line 17 = lines 9 - 10
  onWordInputChange = (key, value, index) => {
    console.log(key);
    console.log(value);
    console.log(index);

    const newState = {
      ...this.state,
    };

    newState.selectedMadLibGen.words[index] = {
      ...newState.selectedMadLibGen.words[index],
      value: value,
    };
    this.setState(newState);
  };

  render() {
    return (
      <div className="MadLibs">
        <h1>Mad Libs page</h1>
        <WordForm
          words={this.state.selectedMadLibGen.words}
          onInputChange={this.onWordInputChange}
        />
        {/* <Story text={this.state.selectedMadLibGen.getText()} /> */}
      </div>
    );
  }
}

// const MadLibs = () => {
//   return (
//     <main className="App-home">
//       <div>Mad Libs page</div>

//       <WordForm />
//     </main>
//   );
// };

export default MadLibs;
