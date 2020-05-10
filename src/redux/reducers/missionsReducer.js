import {
  FETCH_MISSIONS_PENDING,
  FETCH_MISSIONS_SUCCESS,
  FETCH_MISSIONS_ERROR,
  SET_MISSIONS_ROCKET_FILTER,
  SET_MISSIONS_SEARCH_FILTER,
} from '../types';

const initialState = {
  loading: false,
  missionsType: '',
  missionsFilter: '',
  missions: [],
};

const missionsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_MISSIONS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MISSIONS_SUCCESS:
      return {
        loading: false,
        missionsType: 'All',
        missions: payload,
      };
    case FETCH_MISSIONS_ERROR:
      return {
        ...state,
        loading: false,
      };
    case SET_MISSIONS_ROCKET_FILTER:
      return {
        ...state,
        missionsType: payload,
      };
    case SET_MISSIONS_SEARCH_FILTER:
      return {
        ...state,
        missionsFilter: payload,
      };
    default:
      return state;
  }
};

export default missionsReducer;
