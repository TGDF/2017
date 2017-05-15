import React from 'react';

import 'react-dom';
import { translate } from 'react-i18next';

import ScheduleRow from './ScheduleRow';

const sessionRow = (time, sessions) => sessions.get(time.id);

const ScheduleTable = ({ day, rooms, times, sessions, types }) => (
  <div className="schedule">
    <h2 className="schedule__day">{day.name}</h2>
    <table className="schedule__table">
      <thead className="schedule__header">
        <tr className="schedule__table-row">
          <th className="schedule__table-col" />
          { rooms.map(room => <th className="schedule__table-col">{room.name}</th>) }
        </tr>
      </thead>
      <tbody className="schedule__body">
        { times.map(time =>
          <ScheduleRow
            time={time}
            sessions={sessionRow(time, sessions)}
            rooms={rooms}
            types={types}
          />)
        }
      </tbody>
    </table>
  </div>
);

ScheduleTable.propTypes = {
  rooms: React.PropTypes.shape({}).isRequired,
  day: React.PropTypes.shape({
    name: React.PropTypes.string,
  }).isRequired,
  times: React.PropTypes.shape({
    map: React.PropTypes.func,
  }).isRequired,
  sessions: React.PropTypes.shape({
    get: React.PropTypes.func,
  }).isRequired,
  types: React.PropTypes.shape({}).isRequired,
};

export default translate()(ScheduleTable);
