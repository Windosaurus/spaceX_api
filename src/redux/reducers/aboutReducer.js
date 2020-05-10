import {
  FETCH_ABOUT_PENDING,
  FETCH_ABOUT_SUCCESS,
  FETCH_ABOUT_ERROR,
} from '../types';

const initialState = {
  loading: false,
  companyInfo: '',
};

const aboutReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ABOUT_PENDING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ABOUT_SUCCESS:
      return {
        loading: false,
        companyInfo: payload,
      };
    case FETCH_ABOUT_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default aboutReducer;
