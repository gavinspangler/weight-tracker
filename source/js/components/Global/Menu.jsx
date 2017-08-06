import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../views/App';
import logoImage from '../../../assets/img/weight-tracker-logo.svg';

export default class Menu extends Component {
  render() {
    return (
      <div className='Menu'>
        <div className='logo'>
          <img
            src={ logoImage }
            alt='Weight Tracker'
          />
        </div>
        <div className='links'>
          <NavLink
            activeClassName='link-active'
            className='link'
            exact
            to={ routeCodes.HOME }
          >
            Home
          </NavLink>
        </div>
      </div>
    );
  }
}
