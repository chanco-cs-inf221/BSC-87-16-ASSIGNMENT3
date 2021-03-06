//counter project
import React, { Component } from "react";

class My extends Component {
  formatCount = () => {
    const { value } = this.props.my;
    return value === 0 ? "zero" : value;
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()} </span>
        <button
          onClick={() => this.props.onIncrement(this.props.my)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.my.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.my.value === 0 ? "warning" : "primary";
    return classes;
  };
}

export default My;
