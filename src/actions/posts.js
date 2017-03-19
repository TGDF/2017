import API from '../api';

import {
    RECEIVE_POSTS,
} from '../constants/actioTypes';

export const requestPosts = () => {
  const callback = (dispatch) => {
    API().posts().then(posts => dispatch({ type: RECEIVE_POSTS, posts }));
  };

  return callback;
};

export default requestPosts;
