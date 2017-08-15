import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { testAsync } from 'actions/app';

import LineChart from 'components/Charts/LineChart';

const moment = require('moment');
const _ = require('lodash');

@connect(state => ({
  asyncData: state.app.get('asyncData'),
  asyncError: state.app.get('asyncError'),
  asyncLoading: state.app.get('asyncLoading'),
}))
export default class Home extends Component {
  static propTypes = {
    asyncData: PropTypes.string,
    asyncError: PropTypes.object,
    asyncLoading: PropTypes.bool,
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  constructor() {
    super();

    const date = moment();
    const currentDate = _.cloneDeep(date);

    this.state = {
      xValues: [
        date.subtract(5, 'days').format('MM/DD/YYYY'),
        date.add(1, 'days').format('MM/DD/YYYY'),
        date.add(1, 'days').format('MM/DD/YYYY'),
        date.add(1, 'days').format('MM/DD/YYYY'),
        date.add(1, 'days').format('MM/DD/YYYY'),
        currentDate.format('MM/DD/YYYY'),
      ],
      yValues: [183, 185, 187, 184, 184, 187],
    };

    this.handleLogWeight = this.handleLogWeight.bind(this);
  }

  componentWillMount() {
    const { dispatch } = this.props;

    dispatch(testAsync());
  }

  handleLogWeight() {
    const xValues = this.state.xValues;
    const yValues = this.state.yValues;
    xValues.push(moment());
    yValues.push(190);
    this.setState({ xValues, yValues });
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
              { asyncData && <h1>{ asyncData }</h1> }
              { asyncLoading && <p>Loading...</p> }
              { asyncError && <p>Error: { asyncError }</p> }
            </div>
            <div>
              <button type='button' className='button' onClick={ this.handleLogWeight }>Log Weight</button>
            </div>
          </div>
          <div className='chart-wrapper'>
            <LineChart xValues={ this.state.xValues } yValues={ this.state.yValues } />
          </div>
        </div>
      </div>
    );
  }
}
