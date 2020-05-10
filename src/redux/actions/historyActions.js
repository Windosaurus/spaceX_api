import axios from 'axios';

import {
  FETCH_HISTORY_PENDING,
  FETCH_HISTORY_SUCCESS,
  FETCH_HISTORY_ERROR,
  SET_HISTORY_SEARCH_FILTER,
} from '../types';

export const fetchAllHistory = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_HISTORY_PENDING,
    });

    const response = await axios.get('https://api.spacexdata.com/v3/history');

    const history = [];
    for (let i = 0; i < response.data.length; i++) {
      history.push({
        title: response.data[i].title,
        link: response.data[i].links.wikipedia,
        details: response.data[i].details,
        date: response.data[i].event_date_utc,
        id: response.data[i].id,
      });
    }

    console.log('Formatted history data', history);

    dispatch({
      type: FETCH_HISTORY_SUCCESS,
      payload: history,
    });
  } catch (e) {
    dispatch({
      type: FETCH_HISTORY_ERROR,
    });
  }
};

export const filterHistoryBySearch = (searchValue) => async (dispatch) => {
  dispatch({
    type: SET_HISTORY_SEARCH_FILTER,
    payload: searchValue,
  });
};
