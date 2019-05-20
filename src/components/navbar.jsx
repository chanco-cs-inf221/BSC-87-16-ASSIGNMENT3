import React, { Component } from "react";
//stateless functional component
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
        </a>
      </nav>
    );
  }
}

export default Navbar;
