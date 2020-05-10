import axios from 'axios';

import {
  FETCH_ROCKETS_PENDING,
  FETCH_ROCKETS_SUCCESS,
  FETCH_ROCKETS_ERROR,
} from '../types';

export const fetchAllRockets = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_ROCKETS_PENDING,
    });

    const response = await axios.get('https://api.spacexdata.com/v3/rockets');
    console.log('Rocket api call: ', response.data);

    const rockets = [];
    for (let i = 0; i < response.data.length; i++) {
      rockets.push({
        name: response.data[i].rocket_name,
        id: response.data[i].rocket_id,
        img: response.data[i].flickr_images[0],
      });
    }

    console.log('Formatted rocket data', rockets);

    dispatch({
      type: FETCH_ROCKETS_SUCCESS,
      payload: rockets,
    });
  } catch (e) {
    dispatch({
      type: FETCH_ROCKETS_ERROR,
    });
  }
};
