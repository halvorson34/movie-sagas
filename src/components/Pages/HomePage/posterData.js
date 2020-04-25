import React, { Component } from "react";
import { connect } from "react-redux";

class MoviePosters extends Component {
  handleClick = (event) => {
    event.preventDefault();
    this.props.history.push("/details");
  };

  render() {
    let toystoryImage = (
      <img src="/images/toy-story.jpg" onClick={this.handleClick} />
    );

    return <div class="moviePosters">{toystoryImage}</div>;
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(MoviePosters);
