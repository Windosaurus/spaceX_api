import axios from 'axios';

import {
  FETCH_ABOUT_PENDING,
  FETCH_ABOUT_SUCCESS,
  FETCH_ABOUT_ERROR,
} from '../types';

export const fetchCompanyInfo = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_ABOUT_PENDING,
    });

    const response = await axios.get('https://api.spacexdata.com/v3/info');

    console.log('Fetched company info', response.data);

    // const companyInfo = {
    //     name: response.data.name,
    //     employees: response.data.employees,
    //     vehicles: response.data.vehicles,
    //     launchSites: response.data.launch_sites,
    //     testSites: response.data.test_sites,
    //     valuation: response.data.valuation,
    //     location: response.data.headquarters.state,
    //     summary: response.data.summary,
    //     link: response.data.headquarters.links.website
    // };
    //
    // console.log('Company info', companyInfo);

    dispatch({
      type: FETCH_ABOUT_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: FETCH_ABOUT_ERROR,
    });
  }
};
