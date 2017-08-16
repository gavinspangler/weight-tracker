import api from 'api';

export const FETCH_WEIGHT_DATA_START = 'FETCH_WEIGHT_DATA_START';
export const FETCH_WEIGHT_DATA_ERROR = 'FETCH_WEIGHT_DATA_ERROR';
export const FETCH_WEIGHT_DATA_SUCCESS = 'FETCH_WEIGHT_DATA_SUCCESS';

// Async action example

function fetchWeightDataStart() {
  return {
    type: FETCH_WEIGHT_DATA_START,
  };
}

function fetchWeightDataSuccess(data) {
  return {
    type: FETCH_WEIGHT_DATA_SUCCESS,
    data,
  };
}

function fetchWeightDataError(error) {
  return {
    type: FETCH_WEIGHT_DATA_ERROR,
    error,
  };
}

export function fetchWeightData() {
  return function (dispatch) {
    dispatch(fetchWeightDataStart());

    api.fetchWeightData()
      .then(data => dispatch(fetchWeightDataSuccess(data)))
      .catch(error => dispatch(fetchWeightDataError(error)));
  };
}

// Update
