import React from 'react';
import 'react-dom';
import { translate } from 'react-i18next';

import PartnerItem from './PartnerItem';

const PartnerSection = ({ sponsors, level }) => {
  const selected = sponsors.filter(sponsor => sponsor.level === level.id)
                           .groupBy((_, key) => Math.floor(key / 4));
  return (
    <section>
      <header className="major">
        <h2>{level.name}</h2>
      </header>
      {
        selected.toList().map(group => (
          <div key={group} className="row">
            {group.map(sponsor => <PartnerItem key={sponsor.id} sponsor={sponsor} />)}
          </div>
        ))
      }
    </section>
  );
};

PartnerSection.propTypes = {
  level: React.PropTypes.shape({
    id: React.PropTypes.number,
    name: React.PropTypes.string,
  }).isRequired,
  sponsors: React.PropTypes.shape({
    filter: React.PropTypes.func,
    map: React.PropTypes.func,
  }).isRequired,
};

export default translate()(PartnerSection);
