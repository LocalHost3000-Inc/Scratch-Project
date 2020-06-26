import React, { Component } from 'react';
import List from './List.jsx';
import Bar from './Bar.jsx';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchVal: '',
      results: [],
      hasResults: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(submit) {
    submit.preventDefault();
    fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({ location: this.state.searchVal }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ results: data });
        this.setState({ hasResults: true });
      });
  }

  render() {
    if (!this.state.hasResults)
      return (
        <div>
          <Bar handleSubmit={handleSubmit} handleChange={handleChange} />
        </div>
      );

    if (this.state.hasResults)
      return (
        <div>
          <Bar handleSubmit={handleSubmit} handleChange={handleChange} />
          <List searchResults={this.state.results} />
        </div>
      );
  }
}

export default Search;
