import API from '../api';

import {
    RECEIVE_SPONSORS,
    RECEIVE_SPONSOR_LEVELS,
} from '../constants/actioTypes';

export const requestSponsorLevels = () => (
  dispatch => (
    API().sponsorLevels().then(levels => dispatch({ type: RECEIVE_SPONSOR_LEVELS, levels }))
  )
);

export const requestSponsors = () => (
  dispatch => (
    API().sponsors()
         .param('per_page', 100) // NOTE: Read all sponsors (max 100)
         .then(sponsors => dispatch({ type: RECEIVE_SPONSORS, sponsors }))
  )
);

export const requestSponsorsAll = dispatch => (
  Promise.all([requestSponsorLevels()(dispatch), requestSponsors()(dispatch)])
);

export default requestSponsors;
