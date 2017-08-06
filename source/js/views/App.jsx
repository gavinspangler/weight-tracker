import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Home from 'views/Home';
import NotFound from 'views/NotFound';
import Menu from 'components/Global/Menu';

const publicPath = '/';

export const routeCodes = {
  HOME: publicPath,
};

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Menu />
          <div className='Navigation'>
            <Switch>
              <Route exact path={ publicPath } component={ Home } />
              <Route path='*' component={ NotFound } />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
