import React, { Component } from "react";
import { connect } from "react-redux";

class DetailsPage extends Component {
  render() {
    return (
      <div>
        <h1>Details</h1>
      </div>
    );
  }
}

export default connect()(DetailsPage);
