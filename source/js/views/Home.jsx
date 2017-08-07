import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

const moment = require('moment');
const _ = require('lodash');

export default class Home extends Component {
  constructor() {
    super();

    this.handleLogWeight = this.handleLogWeight.bind(this);
  }

  handleLogWeight() {
    console.log(moment().format('MM/DD/YYYY'));
  }

  render() {
    const date = moment();
    const currentDate = _.cloneDeep(date);
    const chartData = {
      labels: [
        date.subtract(5, 'days').format('MM/DD/YYYY'),
        date.add(1, 'days').format('MM/DD/YYYY'),
        date.add(1, 'days').format('MM/DD/YYYY'),
        date.add(1, 'days').format('MM/DD/YYYY'),
        date.add(1, 'days').format('MM/DD/YYYY'),
        currentDate.format('MM/DD/YYYY'),
      ],
      datasets: [{
        label: 'Weight (lbs)',
        data: [183, 185, 187, 184, 184, 187],
        fill: false,
        borderColor: [
          '#FC4A1A',
        ],
        borderWidth: 1,
      }],
    };

    const chartOptions = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false,
          },
        }],
      },
      legend: {
        display: false,
      },
      responsive: true,
      maintainAspectRatio: false,
    };

    return (
      <div className='Home'>
        <div className='title'>
          <h1>Weight Tracker</h1>
        </div>
        <div>
          <button type='button' className='button' onClick={ this.handleLogWeight }>Log Weight</button>
          <div className='chart-wrapper'>
            <Line data={ chartData } options={ chartOptions } />
          </div>
        </div>
      </div>
    );
  }
}
