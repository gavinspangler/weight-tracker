import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

const moment = require('moment');

export default class Home extends Component {
  render() {
    const chartData = {
      labels: [moment().format('MM/DD/YYYY'), 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [183, 185, 187, 184, 184, 187],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
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
      maintainAspectRatio: false,
    };

    return (
      <div className='Home'>
        <h1>Weight Tracker</h1>
        <div>
          <Line data={ chartData } options={ chartOptions } />
        </div>
      </div>
    );
  }
}
