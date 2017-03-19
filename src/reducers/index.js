import { combineReducers } from 'redux-immutable';

import posts from './posts';

const rootReducer = combineReducers({
  posts,
});

export default rootReducer;
