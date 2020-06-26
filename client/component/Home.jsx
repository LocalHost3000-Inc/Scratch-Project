import React, { Component } from "react";
import Login from "./Login.jsx";
import Search from "./Search.jsx";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Login addCurrentUser={this.props.addCurrentUser}/>
      </div>
    );
  }
}
