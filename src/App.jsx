import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import history from "./history";

import LoginContainer from "./components/Login/login-container";
import HomeContainer from "./components/Home/home-container";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" component={LoginContainer} />
          <Route exact path="/home" component={HomeContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
