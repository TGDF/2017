import { combineReducers } from 'redux-immutable';

import posts from './posts';
import sponsors from './sponsors';
import speakers from './speakers';
import sessions from './sessions';

const rootReducer = combineReducers({
  posts,
  sponsors,
  speakers,
  sessions,
});

export default rootReducer;
