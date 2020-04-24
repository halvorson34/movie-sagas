import React, { Component } from "react";
import { connect } from "react-redux";

class EditPage extends Component {
  render() {
    return (
      <div>
        <h1>Edit</h1>
      </div>
    );
  }
}

export default connect()(EditPage);
