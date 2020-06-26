import React, { Component } from "react";
import Login from "./Login.jsx";
import Search from "./Search.jsx";
import { withRouter } from 'react-router-dom'


 class Home extends Component {
  render() {
    return (
      <div>
        <Login addCurrentUser={this.props.addCurrentUser} history={this.props.history} />
      </div>
    );
  }
}

export default withRouter(Home);