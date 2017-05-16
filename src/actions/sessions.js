import API from '../api';

import {
    RECEIVE_SESSIONS,
} from '../constants/actioTypes';

export const requestSessions = () => (
  (dispatch) => {
    const sessions = API().sessions().param('per_page', 100);
    const times = API().session_time().param('per_page', 100);
    const rooms = API().session_room().param('per_page', 100);
    const types = API().session_type().param('per_page', 100);
    return Promise.all([sessions, times, rooms, types])
      .then(
        values => dispatch({
          type: RECEIVE_SESSIONS,
          sessions: values[0],
          times: values[1],
          rooms: values[2],
          types: values[3],
        }),
      );
  }
);

export default requestSessions;
