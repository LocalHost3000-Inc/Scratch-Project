import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Register from "./Register.jsx";
import Profile from "./Profile.jsx";
import Home from "./Home.jsx";
import Nav from "./Nav.jsx";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: {},
      inEditMode = false;
    };
  }
  
  editProfile() {
    this.setState(inEditMode = true)
    // this.setState({...currentUser, user)
    fetch('/api/profile/:id')
  }

 

  render() {
    return (
      <div>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} editProfile={this.editProfile} currentUser={this.state.currentUser}/>
          </Switch>
        </Router>
      </div>
    );
  }
}
