import React, { Component } from "react";
import My from "./My.jsx";

class Mys extends Component {
  state = {
    mys: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleIncrement = my => {
    const mys = [...this.state.mys];
    const index = mys.indexOf(my);
    mys[index] = { ...my };
    mys[index].value++;
    this.setState({ mys });
  };
  handleReset = () => {
    const mys = this.state.mys.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ mys });
  };
  handleDelete = myId => {
    const mys = this.state.mys.filter(c => c.id !== myId);
    this.setState({ mys: mys });
  };
  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.mys.map(my => (
          <My
            key={my.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            my={my}
          />
        ))}
      </div>
    );
  }
}

export default Mys;
