import React from 'react';
import 'react-dom';
import { translate } from 'react-i18next';

import SpeakerItem from './SpeakerItem';

const SpeakerSection = ({ speakers }) => (
  <div className="row">
    {speakers.toList().map(item => <SpeakerItem speaker={item} />)}
  </div>
);

SpeakerSection.propTypes = {
  speakers: React.PropTypes.shape({
  }).isRequired,
};

export default translate()(SpeakerSection);
