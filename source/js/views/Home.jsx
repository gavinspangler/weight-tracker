import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

const moment = require('moment');

export default class Home extends Component {
  render() {
    const currentDate = moment();
    const chartData = {
      labels: [
        currentDate.format('MM/DD/YYYY'),
        currentDate.subtract(1, 'days').format('MM/DD/YYYY'),
        currentDate.subtract(2, 'days').format('MM/DD/YYYY'),
        currentDate.subtract(3, 'days').format('MM/DD/YYYY'),
        currentDate.subtract(4, 'days').format('MM/DD/YYYY'),
        currentDate.subtract(5, 'days').format('MM/DD/YYYY'),
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
        <div className='chart-wrapper'>
          <Line data={ chartData } options={ chartOptions } />
        </div>
      </div>
    );
  }
}
