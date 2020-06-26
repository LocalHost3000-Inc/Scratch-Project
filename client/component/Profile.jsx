import React, { Component } from 'react';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  render() {
    return (
      <ul>
        <li>Username: {this.props.currentUser.username}</li>
        <li>Name: {this.props.currentUser.name}</li>
        <li>Email: {this.props.currentUser.email}</li>
        <li>Country: {this.user.currentUser.country}</li>
      </ul>
      <button onClick={this.handleClick}>Edit Profile</button>
    );
  }
}

export default Profile;
