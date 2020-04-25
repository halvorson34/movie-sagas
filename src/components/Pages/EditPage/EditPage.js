import React, { Component } from "react";
import { connect } from "react-redux";

class EditPage extends Component {
  cancelClick = (event) => {
    event.preventDefault();
    this.props.history.push("/details");
  };

  render() {
    return (
      <div>
        <h1>Edit</h1>
        <button onClick={this.cancelClick}>Cancel</button>
        <button>Save</button>
      </div>
    );
  }
}

export default connect()(EditPage);
