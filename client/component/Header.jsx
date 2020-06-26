import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles/header.scss";

export default class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <header className="header">
        <div >
          <span className="spanOne">Local</span>
          <span className="spanTwo">Host</span>
          <span className="spanThree"> 3000</span>
        </div>
        <div className="buttonsDiv">
          <button className='searchButton'>
            <p>Search</p>
          </button>
          <button>
            <p>Profile</p>
          </button>
        </div>
      </header>
    );
  }
}
