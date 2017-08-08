import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

const moment = require('moment');
const _ = require('lodash');

export default class Home extends Component {
  constructor() {
    super();

    const date = moment();
    const currentDate = _.cloneDeep(date);

    this.state = {
      chartData: {
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
            '#1A0315',
          ],
          borderWidth: 1,
        }],
      },
    };

    this.handleLogWeight = this.handleLogWeight.bind(this);
  }

  handleLogWeight() {
    const chartData = this.state.chartData;
    chartData.labels.push(moment());
    chartData.datasets[0].data.push(190);
    this.setState({ chartData });
  }

  render() {
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
        <div>
          <div className='title-bar'>
            <div>
              <h1>Weight Tracker</h1>
            </div>
            <div>
              <button type='button' className='button' onClick={ this.handleLogWeight }>Log Weight</button>
            </div>
          </div>
          <div className='chart-wrapper'>
            <Line data={ this.state.chartData } options={ chartOptions } redraw />
          </div>
        </div>
      </div>
    );
  }
}
