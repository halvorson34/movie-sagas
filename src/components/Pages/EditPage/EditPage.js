import React, { Component } from "react";
import { connect } from "react-redux";
import "./EditPage.css";

class EditPage extends Component {
  state = {
    updateMovie: {
      newGenre: "",
      newDescription: "",
    },
  };

  inputChange = (event) => {
    event.preventDefault();
    this.setState({
      newTitle: event.target.value,
    });
  };

  textAreaChange = (event) => {
    event.preventDefault();
    this.setState({
      newDescription: event.target.value,
    });
  };

  cancelClick = (event) => {
    event.preventDefault();
    this.props.history.push("/details");
  };

  handleSave = () => {
    this.props.dispatch({ type: "SET_MOVIE", payload: this.state.updateMovie });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h1>Edit</h1>
        <form class="inputField">
          <div class="titleInput">
            <label for="inputLabel">Change Genre</label>
            <br />
            <input
              onChange={this.inputChange}
              type="text"
              placeholder="change movie genre"
              class="inputLabel"
            />
          </div>
          <div class="textAreaInput">
            <label for="textAreaLabel">Change Description</label>
            <br />
            <textarea
              onChange={this.textAreaChange}
              type="text"
              rows="5"
              cols="50"
              placeholder="new description here"
              class="textAreaLabel"
            ></textarea>
          </div>
          <div>
            <button onClick={this.cancelClick}>Cancel</button>
          </div>
          <div>
            <button onClick={this.handleSave}>Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(EditPage);
