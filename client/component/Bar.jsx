import React, { Component } from 'react';

export default class Bar extends Component {
  render() {
    return (
      <div>
        <form method='POST' onSubmit={this.props.handleSubmit}>
          <input type='text' onChange={this.props.handleChange}></input>
          <input type='submit'></input>
        </form>
      </div>
    );
  }
}
