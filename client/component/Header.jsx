import React, { Component } from "react";

export default class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <header>
        <span>Local</span><span>Host</span><span>3000</span>
      </header>
    )
  }
}