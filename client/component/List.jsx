import React, { Component } from 'react';
import Item from './Item.jsx';

const List = (props) => {
  function renderResults(searchResults) {
    return searchResults.map(user => <Item key={user.id} username={user.username} name={user.name} email={user.email} home={user.home} />)
  }

  return <div className="container">{renderResults(props.searchResults)}</div>;
}

export default List;
