import { Map, List, Record } from 'immutable';

import {
    RECEIVE_SESSIONS,
} from '../constants/actioTypes';

const initState = {
  sessions: List([]),
  types: List([]),
  rooms: List([]),
  times: List([]),
};

const Session = Record({
  id: 0,
  name: '',
  description: '',
  types: [],
  speakers: [],
  time: 0,
  room: 0,
});

const Type = Record({ id: 0, name: '' });
const Room = Record({ id: 0, name: '' });
const Time = Record({ id: 0, name: '', parent: null });

const sessionToRecord = session => (
  new Session({
    id: session.id,
    name: session.title.rendered,
    description: session.content.rendered,
    types: session.session_type,
    speakers: session.speakers,
    time: session.session_time[1] || session.session_time[0],
    room: session.session_room[0],
  })
);

const sessionsToRecord = sessions => sessions.map(session => sessionToRecord(session));
const typesToRecord = types => types.map(type => new Type({ id: type.id, name: type.name }));
const roomsToRecord = rooms => rooms.map(room => new Room({ id: room.id, name: room.name }));
const timesToRecord = times => times.map(time =>
  new Time({ id: time.id, name: time.name, parent: time.parent }),
);

const speakers = (state = Map(initState), action) => {
  switch (action.type) {
    case RECEIVE_SESSIONS: {
      return state.set('sessions', List(sessionsToRecord(action.sessions)))
                  .set('types', List(typesToRecord(action.types))
                    .groupBy(type => type.id).map(types => types.first()))
                  .set('rooms', List(roomsToRecord(action.rooms)))
                  .set('times', List(timesToRecord(action.times)));
    }
    default:
      return state;
  }
};

export default speakers;
