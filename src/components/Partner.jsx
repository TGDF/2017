import React from 'react';
import 'react-dom';
import { translate } from 'react-i18next';
import Helmet from 'react-helmet';

import Container from '../containers/PartnerContainer';
import PartnerSection from './PartnerSection';
import { requestSponsors, requestSponsorLevels } from '../actions/sponsors';

class Partner extends React.Component {
  componentWillMount() {
    this.props.dispatch(requestSponsors());
    this.props.dispatch(requestSponsorLevels());
  }

  partners() {
    return this.props.levels.map(level => (
      <PartnerSection key={level.id} sponsors={this.props.sponsors} level={level} />
    ));
  }

  render() {
    return (
      <section>
        <Helmet title={`${this.props.t('nav.partners')} | ${this.props.t('site_name')}`} />
        {this.partners()}
      </section>
    );
  }
}

Partner.propTypes = {
  t: React.PropTypes.func.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  sponsors: React.PropTypes.shape({}).isRequired,
  levels: React.PropTypes.shape({
    map: React.PropTypes.func,
  }).isRequired,
};

export default translate()(Container(Partner));
