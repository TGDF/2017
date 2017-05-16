import React from 'react';
import { List } from 'immutable';

import 'react-dom';
import { translate } from 'react-i18next';

import Session from './Session';

const sessionName = (room, sessions, types) => {
  const sessionsInRoom = sessions.get(room.id);
  if (sessionsInRoom) {
    return sessionsInRoom.sortBy(session => session.order)
                         .map(session => <Session session={session} types={types} />);
  }
  return '';
};

const showRooms = (rooms, sessions, types) => {
  const keynote = sessions.get(0);
  if (keynote) {
    return (<td
      className="schedule__table-col"
      colSpan={rooms.size}
    ><Session session={keynote.first()} types={types} /></td>);
  }
  return rooms.map(room => <td className="schedule__table-col">{sessionName(room, sessions, types)}</td>);
};

const ScheduleRow = ({ time, sessions, rooms, types }) => {
  const sessionsByRoom = sessions.groupBy(session => session.room);
  return (
    <tr className="schedule__table-row">
      <th className="schedule__table-col schedule__table-col--header">{time.name}</th>
      {showRooms(rooms, sessionsByRoom, types)}
    </tr>
  );
};

ScheduleRow.defaultProps = {
  sessions: List([]),
};

ScheduleRow.propTypes = {
  time: React.PropTypes.shape({
    name: React.PropTypes.string,
  }).isRequired,
  sessions: React.PropTypes.shape({}),
  rooms: React.PropTypes.shape({
    map: React.PropTypes.func,
  }).isRequired,
  types: React.PropTypes.shape({}).isRequired,
};

export default translate()(ScheduleRow);
