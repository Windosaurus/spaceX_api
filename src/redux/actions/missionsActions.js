import axios from 'axios';

import {
  FETCH_MISSIONS_PENDING,
  FETCH_MISSIONS_SUCCESS,
  FETCH_MISSIONS_ERROR,
  SET_MISSIONS_ROCKET_FILTER,
  SET_MISSIONS_SEARCH_FILTER,
} from '../types';

export const fetchAllMissions = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_MISSIONS_PENDING,
    });

    const response = await axios.get('https://api.spacexdata.com/v3/launches');

    const missions = [];
    for (let i = 0; i < response.data.length; i++) {
      missions.push({
        rocket: response.data[i].rocket.rocket_name,
        rocketId: response.data[i].rocket.rocket_id,
        type: response.data[i].rocket.rocket_type,
        location: response.data[i].launch_site.site_name,
        details: response.data[i].details,
        date: response.data[i].launch_date_utc,
        link: response.data[i].links.article_link,
      });
    }

    console.log('Formatted mission data', missions);

    dispatch({
      type: FETCH_MISSIONS_SUCCESS,
      payload: missions,
    });
  } catch (e) {
    dispatch({
      type: FETCH_MISSIONS_ERROR,
    });
  }
};

export const filterMissionsByRocket = (rocketId) => async (dispatch) => {
  dispatch({
    type: SET_MISSIONS_ROCKET_FILTER,
    payload: rocketId,
  });
};

export const filterMissionsBySearch = (searchValue) => async (dispatch) => {
  dispatch({
    type: SET_MISSIONS_SEARCH_FILTER,
    payload: searchValue,
  });
};
