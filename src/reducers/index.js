import { combineReducers } from 'redux-immutable';

import posts from './posts';
import sponsors from './sponsors';
import speakers from './speakers';

const rootReducer = combineReducers({
  posts,
  sponsors,
  speakers,
});

export default rootReducer;
