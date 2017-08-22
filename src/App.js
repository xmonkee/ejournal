// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

type Props = {}
type State = {}

class App extends Component<Props, State> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Ejournal</h2>
        </div>
        <p className="App-intro">
            More Coming Soon
        </p>
      </div>
    );
  }
}

export default App;
