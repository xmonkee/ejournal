// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {model} from './fixtures/';
import './styles/milligram.css';


ReactDOM.render(
  <App model={model}/>,
  document.getElementById('root')
);
