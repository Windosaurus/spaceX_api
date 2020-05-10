import {
  FETCH_ROCKETS_PENDING,
  FETCH_ROCKETS_SUCCESS,
  FETCH_ROCKETS_ERROR,
} from '../types';

const initialState = {
  loading: false,
  rockets: [{
    name: '',
    id: '',
    img: '',
  }],
};

const rocketsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ROCKETS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ROCKETS_SUCCESS:
      return {
        loading: false,
        rockets: payload,
      };
    case FETCH_ROCKETS_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default rocketsReducer;
