import api from 'api';

export const FETCH_WEIGHT_DATA_START = 'FETCH_WEIGHT_DATA_START';
export const FETCH_WEIGHT_DATA_ERROR = 'FETCH_WEIGHT_DATA_ERROR';
export const FETCH_WEIGHT_DATA_SUCCESS = 'FETCH_WEIGHT_DATA_SUCCESS';

export const LOG_WEIGHT_START = 'LOG_WEIGHT_START';
export const LOG_WEIGHT_ERROR = 'LOG_WEIGHT_ERROR';
export const LOG_WEIGHT_SUCCESS = 'LOG_WEIGHT_SUCCESS';

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

function logWeightStart() {
  return {
    type: LOG_WEIGHT_START,
  };
}

function logWeightError(error) {
  return {
    type: LOG_WEIGHT_ERROR,
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


export function logWeight(weightData) {
  return function (dispatch) {
    dispatch(logWeightStart());

    api.logWeight(weightData)
      .then(dispatch(fetchWeightData()))
      .catch(error => dispatch(logWeightError(error)));
  };
}
