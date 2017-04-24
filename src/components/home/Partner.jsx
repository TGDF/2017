import React from 'react';

import 'react-dom';
import { translate } from 'react-i18next';

const PartnerItem = ({ sponsor }) => (
  <div className="2u 12u(mobile) home-partner__item">
    <section className="box">
      <a href={sponsor.link} className="image featured">
        <img src={sponsor.logo.normal} alt={sponsor.name} />
      </a>
    </section>
  </div>
);

PartnerItem.propTypes = {
  sponsor: React.PropTypes.shape({}).isRequired,
};

const sponsorsByLevels = (levels, sponsors) => (
  levels.map(level => sponsors.filter(sponsor => sponsor.level === level.id)).flatten()
);

const items = group => (
  group.map(item => <PartnerItem sponsor={item} key={item.id} />)
);

const PartnerSection = ({ t, sponsors, levels }) => {
  const groupedSponsor = sponsorsByLevels(levels, sponsors)
                         .groupBy((_, key) => Math.floor(key / 6));
  const rows = groupedSponsor.map(group => <div className="row" key={group}>{items(group)}</div>);
  return (
    <section>
      <header className="major">
        <h2>{t('nav.partners')}</h2>
      </header>
      {rows}
    </section>
  );
};

PartnerSection.propTypes = {
  levels: React.PropTypes.shape({
    id: React.PropTypes.number,
    name: React.PropTypes.string,
  }).isRequired,
  sponsors: React.PropTypes.shape({
    filter: React.PropTypes.func,
    map: React.PropTypes.func,
  }).isRequired,
  t: React.PropTypes.func.isRequired,
};

export default translate()(PartnerSection);
