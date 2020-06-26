import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    return (
      <div className='hosts'>
        <ul>
          <li>Username: {this.props.username}</li>
          <li>Name: {this.props.name}</li>
          <li>Email: {this.props.email}</li>
          <li>Home: {this.props.home}</li>
        </ul>
      </div>
    );

    return (
      <div className='hosts'>
        <ul>
          <li>Username: {this.props.username}</li>
          <li>Name: {this.props.name}</li>
          <li>Email: {this.props.email}</li>
          <li>Home: {this.props.home}</li>
        </ul>
      </div>
    );
  }
}
