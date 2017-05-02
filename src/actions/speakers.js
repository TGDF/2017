import API from '../api';

import {
    RECEIVE_SPEAKERS,
} from '../constants/actioTypes';

export const requestSpeakers = () => (
  (dispatch) => {
    API().speakers().then(speakers => dispatch({ type: RECEIVE_SPEAKERS, speakers }));
  }
);

export default requestSpeakers;
