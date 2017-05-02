import React from 'react';
import 'react-dom';
import { translate } from 'react-i18next';

const SpeakerItem = ({ speaker }) => (
  <div className="3u 12u(mobile) partner__item">
    <section className="box">
      <a href="" className="image featured">
        <img src={speaker.thumbnail} alt={speaker.name} />
      </a>
      <header>
        <h3>{speaker.name}</h3>
      </header>
      <div dangerouslySetInnerHTML={{ __html: speaker.excerpt }} />
    </section>
  </div>
);

SpeakerItem.propTypes = {
  speaker: React.PropTypes.shape({}).isRequired,
};

export default translate()(SpeakerItem);
