import React, { Component } from 'react';

class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  // function
  renderProfile() {
    console.log(this.props.currentUser);
    if (this.props.currentUser.username && this.props.inEditMode === false) {
      return (
        <div>
          <ul>
            <li>Username: {this.props.currentUser.username}</li>
            <li>Email: {this.props.currentUser.email}</li>
            <li>Home: {this.props.currentUser.home}</li>
          </ul>
          <button onClick={this.handleClick}>Edit Profile</button>
        </div>
      );
    }
    if (this.props.currentUser.username && this.props.inEditMode === true) {
      return (
        <div>
          <ul>
            <li>
              Username: <input name='username' value={this.props.currentUser.username}></input>
            </li>
            <li>
              Email: <input name='email' value={this.props.currentUser.email}></input>
            </li>
            <li>
              Home: <input name='home' value={this.props.currentUser.home}></input>
            </li>
          </ul>
          <button onClick={this.handleClick}>Edit Profile</button>
        </div>
      );
    }
  }
  // if currentuser.name
  // check if editmode: false
  // render ul li
  // if editmode true
  // render input fields

  render() {
    //(if not in edit mode)
    return <div>{this.renderProfile()}</div>;
  }
}

export default Profile;
