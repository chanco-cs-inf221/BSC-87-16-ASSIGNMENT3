import React, { Component } from "react";
import Mys from "./components/Mys.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <Mys />
      </div>
    );
  }
}

export default App;
