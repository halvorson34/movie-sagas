import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";

import "./EditPage.css";

class EditPage extends Component {
  state = {
    genre: "",
    description: "",
  };

  inputChange = (event) => {
    event.preventDefault();
    this.setState({
      genre: event.target.value,
    });
  };

  textAreaChange = (event) => {
    event.preventDefault();
    this.setState({
      description: event.target.value,
    });
  };

  cancelClick = (event) => {
    event.preventDefault();
    this.props.history.push("/details");
  };

  handleSave = () => {
    this.props.dispatch({
      type: "SET_MOVIES",
      payload: this.state,
    });
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
            <Button
              onClick={this.cancelClick}
              href="#text-buttons"
              color="primary"
              size="large"
            >
              Cancel
            </Button>
          </div>
          <div>
            <Button
              onClick={this.handleSave}
              color="secondary"
              size="large"
              variant="contained"
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(EditPage);
