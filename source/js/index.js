import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import 'moment';
import 'lodash';

import App from 'views/App';

// Load SCSS
import '../scss/app.scss';

// Render it to DOM
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
