import { fromJS, Record } from 'immutable';

import {
    RECEIVE_POSTS,
} from '../constants/actioTypes';

const Post = Record({ title: '', excerpt: '', id: 0, content: '' });

const posts = (state = fromJS({ posts: [] }), action) => {
  switch (action.type) {
    case RECEIVE_POSTS: {
      const newPosts = [];
      action.posts.forEach((item) => {
        if (item.id !== 0) {
          newPosts.push(new Post({
            id: item.id,
            title: item.title.rendered,
            excerpt: item.excerpt.rendered,
            content: item.excerpt.rendered,
          }));
        }
      });
      return state.set('posts', state.get('posts').merge(newPosts)); // eslint-disable-line
    }
    default:
      return state;
  }
};

export default posts;
