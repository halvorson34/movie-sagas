import React, { Component } from "react";
import { connect } from "react-redux";
import "./EditPage.css";

class EditPage extends Component {
  cancelClick = (event) => {
    event.preventDefault();
    this.props.history.push("/details");
  };

  render() {
    return (
      <div>
        <h1>Edit</h1>
        <form class="inputField">
          <div class="titleInput">
            <label for="inputLabel">Change Title</label>
            <br />
            <input placeholder="change movie title" class="inputLabel" />
          </div>
          <div class="textAreaInput">
            <label for="textAreaLabel">Change Description</label>
            <br />
            <textarea rows="5" cols="50" class="textAreaLabel"></textarea>
          </div>
          <div>
            <button onClick={this.cancelClick}>Cancel</button>
          </div>
          <div>
            <button>Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(EditPage);
