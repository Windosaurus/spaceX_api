import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import rocketsReducer from './rocketsReducer';
import missionsReducer from './missionsReducer';
import historyReducer from './historyReducer';
import aboutReducer from './aboutReducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  rockets: rocketsReducer,
  missions: missionsReducer,
  history: historyReducer,
  about: aboutReducer,
});
