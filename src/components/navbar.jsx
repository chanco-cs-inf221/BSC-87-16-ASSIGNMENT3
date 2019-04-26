import React, { Component } from "react";
//stateless functional componet
const Navbar = ({ totalMys }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className=".badge.badge-pill.badge-secondary">{totalMys}</span>
      </a>
    </nav>
  );
};

export default Navbar;
