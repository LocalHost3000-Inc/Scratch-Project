import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    return (
      <div className='hosts'>
        <ul>
          <li>Username: {this.props.username}</li>
          <li>Name: {this.props.name}</li>
          <li>Email: {this.props.email}</li>
          <li>Country: {this.user.country}</li>
        </ul>
      </div>
    );
  }
}
