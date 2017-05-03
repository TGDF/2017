import { List, Record } from 'immutable';

import {
    RECEIVE_SPEAKERS,
} from '../constants/actioTypes';

const Speaker = Record({ id: 0, name: '', thumbnail: '', avatar: '', excerpt: '', description: '', session: [] });

const speakers = (state = List([]), action) => {
  switch (action.type) {
    case RECEIVE_SPEAKERS: {
      const newSpeakers = [];
      action.speakers.forEach((item) => {
        if (item.id !== 0) {
          newSpeakers.push(new Speaker({
            id: item.id,
            name: item.title.rendered,
            excerpt: item.excerpt.rendered,
            description: item.content.rendered,
            thumbnail: item.thumbnail,
            avatar: item.avatar,
            session: item.session,
          }));
        }
      });
      return List(newSpeakers);
    }
    default:
      return state;
  }
};

export default speakers;
