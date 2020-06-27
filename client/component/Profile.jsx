import React, { Component } from 'react';

class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  // function
  renderProfile() {
    if (this.props.signedIn && !this.props.inEditMode) {
      return (
        <div>
          <ul>
            <li>Username: {this.props.currentUser.username}</li>
            <li>Email: {this.props.currentUser.email}</li>
            <li>Home: {this.props.currentUser.home}</li>
          </ul>
          <button onClick={this.props.editProfile}>Edit Profile</button>
        </div>
      );
    }
    if (this.props.signedIn && this.props.inEditMode) {
      return (
        <div>
          <form onSubmit={this.props.saveProfile}>
            Username:
            <input
              name='username'
              value={this.props.currentUser.username}
              onChange={this.props.editingProfile}
            ></input>
            Email:
            <input
              name='email'
              value={this.props.currentUser.email}
              onChange={this.props.editingProfile}
            ></input>
            Home:
            <input
              name='home'
              value={this.props.currentUser.home}
              onChange={this.props.editingProfile}
            ></input>
            <button type='submit'>Confirm Profile</button>
          </form>
        </div>
      );
    }
  }

  render() {
    //(if not in edit mode)
    return (
      <div>
        {/* {this.props.signedIn && !this.props.inEditMode ? (
          <div>
            <ul>
              <li>Username: {this.props.currentUser.username}</li>
              <li>Email: {this.props.currentUser.email}</li>
              <li>Home: {this.props.currentUser.home}</li>
            </ul>
            <button onClick={this.props.editProfile}>Edit Profile</button>
          </div>
        ) : this.props.signedIn && this.props.inEditMode ? (
          <div>
            <form onSubmit={this.props.editProfile}>
              Username:
              <input
                name='username'
                value={this.props.currentUser.username}
                onChange={this.props.editingProfile}
              ></input>
              Email:
              <input
                name='email'
                value={this.props.currentUser.email}
                onChange={this.props.editingProfile}
              ></input>
              Home:
              <input
                name='home'
                value={this.props.currentUser.home}
                onChange={this.props.editingProfile}
              ></input>
              <button type='submit'>Confirm Profile</button>
            </form>
          </div>
        ) : null} */}
        {this.renderProfile()}
      </div>
    );
  }
}

export default Profile;
