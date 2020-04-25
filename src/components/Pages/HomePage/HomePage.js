import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomePage.css";
//import MoviePosters from "../HomePage/posterData";

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
        class="posterImage"
      />
    );

    return <div class="moviePosters">{toystoryImage}</div>;
  }
}

//const mapStoreToProps = (store) => ({ store });

export default connect()(HomePage);
