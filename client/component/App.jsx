import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./Register.jsx";
import Profile from "./Profile.jsx";
import Home from "./Home.jsx";
import Nav from "./Nav.jsx";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: {},
    };
  }

  render() {
    return (
      <div>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </Router>
      </div>
    );
  }
}
