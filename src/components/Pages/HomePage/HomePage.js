import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomePage.css";

class HomePage extends Component {
  handleClick = (event) => {
    event.preventDefault();
    this.props.history.push("/details");
  };

  render() {
    let toystoryImage = (
      <img
        src="/images/toy-story.jpg"
        onClick={this.handleClick}
        id="posterImage"
      />
    );

    return (
      <div id="moviePosters">
        {toystoryImage}
        <br />
        {this.props.store.movieReducer.movie.description}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(HomePage);
