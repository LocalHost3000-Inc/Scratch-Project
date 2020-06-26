import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './Register.jsx';
import Profile from './Profile.jsx';
import Home from './Home.jsx';
import Header from './Header.jsx';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: {
        id: 5,
        username: 'test',
        password: 'test2',
        name: 't1',
        home: 'JPN',
        email: 't1@t1.com',
        type: 'traveler',
      },
      inEditMode: false,
    };

    this.addCurrentUser = this.addCurrentUser.bind(this);
  }

  addCurrentUser(user) {
    this.setState({ currentUser: user });
  }

  editProfile() {
    this.setState({ inEditMode: true });
    // this.setState({...currentUser, user)
    // fetch('/api/profile/:id')
  }

  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route
              exact
              path='/register'
              component={() => <Register addCurrentUser={this.addCurrentUser} />}
            />
            <Route exact path='/profile' component={Profile} />
          </Switch>
        </Router>
      </div>
    );
  }
}
