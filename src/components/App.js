// @flow
import React, { Component } from 'react';
import logo from './../logo.svg';
import './../styles/App.css';
import ExerciseInput from './einput';
import {Bench} from './../fixtures/exercises';

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
        <div className="App-intro">
          <ExerciseInput exercise={Bench}/>
        </div>
      </div>
    );
  }
}

export default App;
