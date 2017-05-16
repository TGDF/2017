import API from '../api';

import {
    RECEIVE_POSTS,
} from '../constants/actioTypes';

export const requestPosts = () => (
  dispatch => (
    API().posts().then(posts => dispatch({ type: RECEIVE_POSTS, posts }))
  )
);

export default requestPosts;
