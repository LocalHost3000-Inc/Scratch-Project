import React, { Component } from "react";
import '../styles/header.scss';

export default class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <header className='headerWrapper'>
        <div className='headerInnerDiv'><span class='spanOne'>Local</span><span class='spanTwo'>Host</span><span class='spanThree'> 3000</span></div>
      </header>
    )
  }
}