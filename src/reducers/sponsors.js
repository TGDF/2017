import { fromJS, Record } from 'immutable';

import {
    RECEIVE_SPONSORS,
    RECEIVE_SPONSOR_LEVELS,
} from '../constants/actioTypes';

const Sponsor = Record({ id: 0, name: '', logo: {}, description: '', level: 0 });
const Level = Record({ name: '', id: 0 });

const sponsors = (state = fromJS({ sponsors: [], levels: [] }), action) => {
  switch (action.type) {
    case RECEIVE_SPONSORS: {
      const items = action.sponsors.map(sponsor => (
          new Sponsor({
            name: sponsor.title.rendered,
            logo: sponsor.logo,
            description: sponsor.excerpt.raw,
            level: sponsor.sponsor_level[0],
          })
      ));
      return state.set('sponsors', state.get('sponsors').merge(items));
    }
    case RECEIVE_SPONSOR_LEVELS: {
      const levels = action.levels.map(level => new Level({ name: level.name, id: level.id }));
      return state.set('levels', state.get('levels').merge(levels));
    }
    default:
      return state;
  }
};

export default sponsors;
