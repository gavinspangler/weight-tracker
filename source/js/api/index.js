import 'es6-promise';

const moment = require('moment');
const _ = require('lodash');

function fetchWeightData() {
  return new Promise(resolve => {
    setTimeout(() => {
      const date = moment();
      const currentDate = _.cloneDeep(date);

      resolve({
        xValues: [
          date.subtract(5, 'days').format('MM/DD/YYYY'),
          date.add(1, 'days').format('MM/DD/YYYY'),
          date.add(1, 'days').format('MM/DD/YYYY'),
          date.add(1, 'days').format('MM/DD/YYYY'),
          date.add(1, 'days').format('MM/DD/YYYY'),
          currentDate.format('MM/DD/YYYY'),
        ],
        yValues: [183, 185, 187, 184, 184, 187],
      });
    }, (Math.random() * 1000) + 1000); // 1-2 seconds delay
  });
}

export default {
  fetchWeightData,
};
