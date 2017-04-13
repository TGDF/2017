import React from 'react';
import 'react-dom';
import { translate } from 'react-i18next';

const PartnerItem = ({ sponsor }) => (
  <div className="3u 12u(mobile) partner__item">
    <section className="box">
      <a href={sponsor.link} className="image featured">
        <img src={sponsor.logo.normal} alt={sponsor.name} />
      </a>
      <header>
        <h3>{sponsor.name}</h3>
      </header>
      <p>{sponsor.description}</p>
    </section>
  </div>
);

PartnerItem.propTypes = {
  sponsor: React.PropTypes.shape({
  }).isRequired,
};

export default translate()(PartnerItem);
