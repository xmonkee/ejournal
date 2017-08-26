// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import model from './model';
import './styles/milligram.css';


ReactDOM.render(
  <App model={model}/>,
  document.getElementById('root')
);
