import API from '../api';

import {
    RECEIVE_SPEAKERS,
} from '../constants/actioTypes';

export const requestSpeakers = () => (
  (dispatch) => {
    API().speakers()
         .param('per_page', 100)
         .then(speakers => dispatch({ type: RECEIVE_SPEAKERS, speakers }));
  }
);

export default requestSpeakers;
