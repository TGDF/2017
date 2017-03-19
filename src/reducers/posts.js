import {
    RECEIVE_POSTS,
} from '../constants/actioTypes';


const posts = (state = { posts: [] }, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return { posts: action.posts };
    default:
      return state;
  }
};

export default posts;
