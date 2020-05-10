import {
  FETCH_HISTORY_PENDING,
  FETCH_HISTORY_SUCCESS,
  FETCH_HISTORY_ERROR,
  SET_HISTORY_SEARCH_FILTER,
} from '../types';

const initialState = {
  loading: false,
  historyFilter: '',
  historyList: [{
    title: '',
    link: '',
    details: '',
    date: '',
  }],
};

const historyReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_HISTORY_PENDING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_HISTORY_SUCCESS:
      return {
        loading: false,
        historyFilter: '',
        historyList: payload,
      };
    case FETCH_HISTORY_ERROR:
      return {
        ...state,
        loading: false,
      };
    case SET_HISTORY_SEARCH_FILTER:
      return {
        ...state,
        historyFilter: payload,
      };
    default:
      return state;
  }
};

export default historyReducer;
