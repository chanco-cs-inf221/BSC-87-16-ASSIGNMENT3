import React, { Component } from "react";
import Mys from "./components/Mys.jsx";
import Navbar from "./components/navbar.jsx";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Mys />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
