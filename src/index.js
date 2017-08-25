// @flow

import type {Model} from './model';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import model from './model';
import './styles/index.css';


ReactDOM.render(
  <App model={model}/>,
  document.getElementById('root')
);
