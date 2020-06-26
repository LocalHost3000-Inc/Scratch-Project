import React, { Component } from "react";
import "../styles/header.scss";

export default class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <header className="header">
        <div className="headerInnerDiv">
          <span className="spanOne">Local</span>
          <span className="spanTwo">Host</span>
          <span className="spanThree"> 3000</span>
        </div>
      </header>
    );
  }
}
