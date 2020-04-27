import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import EditPage from "../Pages/EditPage/EditPage";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <h1>Movie Saga</h1>
          <hr />
          <Route exact path="/" component={HomePage} />
          <Route path="/edit" component={EditPage} />
          <Route path="/details" component={DetailsPage} />
        </Router>
      </div>
    );
  }
}

export default App;
