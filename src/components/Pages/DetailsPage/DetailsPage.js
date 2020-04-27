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
        <h3>Genre</h3>
        {this.props.store.movieReducer.movie.genre}
        <br />
        <button onClick={this.movieListClick}>Back to Movie List</button>
        <button onClick={this.editMovieClick}>Edit Movie</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(DetailsPage);
