import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      usernameInputField: '',
      passwordInputField: ''
    }
    this.handleUsernameInputField = this.handleUsernameInputField.bind(this);
    this.handlePasswordInputField = this.handlePasswordInputField.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
  }
  handleUsernameInputField(e) {
    this.setState({usernameInputField: e.target.value})
  }
  handlePasswordInputField(e) {
    this.setState({passwordInputField: e.target.value})
  }
  handleSubmitButton(e) {
    console.log('call to submit button')
    this.setState({usernameInputField: '', passwordInputField: ''});
    
    e.preventDefault();
  }
  render() {
    return (
      <main>
        <h1>Login</h1>
        <form id='loginForm'>
          <div>
            <input placeholder='username' name='usernameInputField' value={this.state.usernameInputField} onChange={this.handleUsernameInputField}>
            </input>
          </div>
            <input placeholder='password' name='passwordInputField' value={this.state.passwordInputField} onChange={this.handlePasswordInputField}>
            </input>
          <div>
            <button form='loginForm' type='submit'  value='Submit' onClick={this.handleSubmitButton}>
              Submit
            </button>
          </div>
        </form>
      </main>
    )
  }
}

export default Login;
