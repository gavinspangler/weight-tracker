import 'es6-promise';

const axios = require('axios');
const _ = require('lodash');

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
