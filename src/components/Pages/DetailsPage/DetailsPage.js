import React, { Component } from "react";
import { connect } from "react-redux";

class DetailsPage extends Component {
  movieListClick = (event) => {
    event.preventDefault();
    this.props.history.push("/");
  };

  editMovieClick = (event) => {
    event.preventDefault();
    this.props.history.push("/edit");
  };

  render() {
    return (
      <div>
        <h1>Details</h1>
        <button onClick={this.movieListClick}>Back to Movie List</button>
        <button onClick={this.editMovieClick}>Edit Movie</button>
      </div>
    );
  }
}

export default connect()(DetailsPage);
