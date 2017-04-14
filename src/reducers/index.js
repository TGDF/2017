import { combineReducers } from 'redux-immutable';

import posts from './posts';
import sponsors from './sponsors';

const rootReducer = combineReducers({
  posts,
  sponsors,
});

export default rootReducer;
