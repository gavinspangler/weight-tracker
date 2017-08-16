import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { fetchWeightData } from 'actions/app';

import LineChart from 'components/Charts/LineChart';

@connect(state => ({
  weightData: state.app.weightData,
  weightDataError: state.app.weightDataError,
  weightDataLoading: state.app.weightDataLoading,
}))
export default class Home extends Component {
  static propTypes = {
    weightData: PropTypes.object,
    weightDataError: PropTypes.object,
    weightDataLoading: PropTypes.bool,
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  constructor() {
    super();

    this.handleLogWeight = this.handleLogWeight.bind(this);
  }

  componentWillMount() {
    const { dispatch } = this.props;

    dispatch(fetchWeightData());
  }

  handleLogWeight() {
  }

  render() {
    const {
      weightData,
      weightDataError,
      weightDataLoading,
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
          { weightData &&
            <div className='chart-wrapper'>
              <LineChart xValues={ weightData.xValues } yValues={ weightData.yValues } />
            </div>
          }
          { weightDataLoading && <p>Loading...</p> }
          { weightDataError && <p>Error: { weightDataError }</p> }
        </div>
      </div>
    );
  }
}
