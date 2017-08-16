import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { testAsync } from 'actions/app';

import LineChart from 'components/Charts/LineChart';

@connect(state => ({
  asyncData: state.app.asyncData, // .get('asyncData'),
  asyncError: state.app.asyncError, // get('asyncError'),
  asyncLoading: state.app.asyncLoading, // .get('asyncLoading'),
}))
export default class Home extends Component {
  static propTypes = {
    asyncData: PropTypes.object,
    asyncError: PropTypes.object,
    asyncLoading: PropTypes.bool,
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  constructor() {
    super();

    this.handleLogWeight = this.handleLogWeight.bind(this);
  }

  componentWillMount() {
    const { dispatch } = this.props;

    dispatch(testAsync());
  }

  handleLogWeight() {
  }

  render() {
    const {
      asyncData,
      asyncError,
      asyncLoading,
    } = this.props;

    return (
      <div className='Home'>
        <div>
          <div className='title-bar'>
            <div>
              <h1>Weight Tracker</h1>
            </div>
            <div>
              <button type='button' className='button' onClick={ this.handleLogWeight }>Log Weight</button>
            </div>
          </div>
          { asyncData &&
            <div className='chart-wrapper'>
              <LineChart xValues={ asyncData.xValues } yValues={ asyncData.yValues } />
            </div>
          }
          { asyncLoading && <p>Loading...</p> }
          { asyncError && <p>Error: { asyncError }</p> }
        </div>
      </div>
    );
  }
}
