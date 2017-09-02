import 'es6-promise';

const axios = require('axios');
// const moment = require('moment');
const _ = require('lodash');

// function fetchWeightData() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       const date = moment();
//       const currentDate = _.cloneDeep(date);
//
//       resolve({
//         xValues: [
//           date.subtract(5, 'days').format('MM/DD/YYYY'),
//           date.add(1, 'days').format('MM/DD/YYYY'),
//           date.add(1, 'days').format('MM/DD/YYYY'),
//           date.add(1, 'days').format('MM/DD/YYYY'),
//           date.add(1, 'days').format('MM/DD/YYYY'),
//           currentDate.format('MM/DD/YYYY'),
//         ],
//         yValues: [183, 185, 187, 184, 184, 187],
//       });
//     }, (Math.random() * 1000) + 1000); // 1-2 seconds delay
//   });
// }

function fetchWeightData() {
  return axios.get('http://localhost:3001/weights')
    .then(response => {
      return response;
    })
    .catch(error => {
      throw error;
    });
}

function logWeight(weightData) {
  return new Promise(resolve => {
    setTimeout(() => {
      const newWeightData = _.clone(weightData);

      resolve(newWeightData);
    }, (Math.random() * 1000) + 1000); // 1-2 seconds delay
  });
}

export default {
  fetchWeightData,
  logWeight,
};
