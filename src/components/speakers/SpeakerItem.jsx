import React from 'react';
import 'react-dom';
import {
  Link,
} from 'react-router-dom';
import { translate } from 'react-i18next';

const SpeakerItem = ({ t, speaker }) => (
  <div className="3u 12u(mobile) partner__item">
    <section className="box">
      <Link to={`/speaker/${speaker.id}`} className="image featured">
        <img src={speaker.thumbnail} alt={speaker.name} />
      </Link>
      <header>
        <h3>{speaker.name}</h3>
      </header>
      <div dangerouslySetInnerHTML={{ __html: speaker.excerpt }} />
      <footer>
        <Link to={`/speaker/${speaker.id}`} className="button alt">{t('find_more')}</Link>
      </footer>
    </section>
  </div>
);

SpeakerItem.propTypes = {
  speaker: React.PropTypes.shape({}).isRequired,
  t: React.PropTypes.func.isRequired,
};

export default translate()(SpeakerItem);
