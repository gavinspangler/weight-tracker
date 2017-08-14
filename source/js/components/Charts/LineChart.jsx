import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { PropTypes } from 'prop-types';

export default class LineChart extends Component {
  static propTypes = {
    xValues: PropTypes.array,
    yValues: PropTypes.array,
  }

  render() {
    const chartData = {
      labels: this.props.xValues,
      datasets: [{
        label: 'Weight (lbs)',
        data: this.props.yValues,
        fill: false,
        borderColor: [
          '#1A0315',
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
      <div>
        <Line data={ chartData } options={ chartOptions } redraw />
      </div>
    );
  }
}
