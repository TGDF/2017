import React from 'react';
import { Map } from 'immutable';
import {
  Link,
} from 'react-router-dom';

import 'react-dom';
import { translate } from 'react-i18next';

const toTypeTag = (id, types) => {
  const type = types.get(id);
  if (type) {
    return <span className="schedule__session-type">{type.name}</span>;
  }
  return null;
};

const displaySpeaker = (speakers) => {
  if (speakers) {
    return speakers.map(speaker => <Link to={`/speaker/${speaker.id}`}>{speaker.name}</Link>);
  }
  return null;
};

const Session = ({ session, types }) => (
  <div className="schedule__session">
    <div className="schedule__session-name">{ session.name }</div>
    <div className="schedule__session-speaker">
      {displaySpeaker(session.speakers)}
    </div>
    { session.types.map(id => toTypeTag(id, types)) }
  </div>
);

Session.defaultProps = {
  session: Map({
    name: '',
    types: [],
  }),
};

Session.propTypes = {
  session: React.PropTypes.shape({}),
  types: React.PropTypes.shape({
    get: React.PropTypes.func,
  }).isRequired,
};

export default translate()(Session);
