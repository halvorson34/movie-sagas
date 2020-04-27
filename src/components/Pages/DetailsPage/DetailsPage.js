import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";

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
        <Button
          onClick={this.movieListClick}
          variant="contained"
          color="primary"
          size="medium"
        >
          Back to Movie List
        </Button>
        <Button
          onClick={this.editMovieClick}
          variant="contained"
          color="secondary"
          size="medium"
        >
          Edit Movie
        </Button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(DetailsPage);
