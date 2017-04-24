import React from 'react';
import 'react-dom';
import { translate } from 'react-i18next';

const PartnerItem = ({ sponsor }) => (
  <div className="12u 12u(mobile) partner__item">
    <section className="box">
      <div className="row">
        <div className="3u 12u(mobile)">
          <a href={sponsor.link} className="image">
            <img src={sponsor.logo.normal} alt={sponsor.name} />
          </a>
        </div>
        <div className="9u 12u(mobile)">
          <header>
            <h3>{sponsor.name}</h3>
          </header>
          <p>{sponsor.description}</p>
        </div>
      </div>
    </section>
  </div>
);

PartnerItem.propTypes = {
  sponsor: React.PropTypes.shape({
  }).isRequired,
};

export default translate()(PartnerItem);
