import { Map } from 'immutable';

import {
  FETCH_WEIGHT_DATA_START,
  FETCH_WEIGHT_DATA_ERROR,
  FETCH_WEIGHT_DATA_SUCCESS,
} from 'actions/app';

const initialState = Map({
  weightDataLoading: false,
  weightDataError: null,
  weightData: null,
});

const actionsMap = {
  // Async action
  [FETCH_WEIGHT_DATA_START]: (state) => {
    return Object.assign({}, state, {
      weightDataLoading: true,
      weightDataError: null,
    });
  },
  [FETCH_WEIGHT_DATA_ERROR]: (state, action) => {
    return Object.assign({}, state, {
      weightDataLoading: false,
      weightDataError: action.data,
    });
  },
  [FETCH_WEIGHT_DATA_SUCCESS]: (state, action) => {
    return Object.assign({}, state, {
      weightDataLoading: false,
      weightData: action.data,
    });
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
