import React from 'react';
import 'react-dom';
import { translate } from 'react-i18next';
import Helmet from 'react-helmet';

import { requestSponsors, requestSponsorLevels } from '../actions/sponsors';

class Partner extends React.Component {
  componentWillMount() {
    this.props.dispatch(requestSponsors());
    this.props.dispatch(requestSponsorLevels());
  }

  render() {
    return (
      <section>
        <Helmet title={`${this.props.t('nav.sponsor')} | ${this.props.t('site_name')}`} />
      </section>
    );
  }
}

Partner.propTypes = {
  t: React.PropTypes.func.isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

export default translate()(Partner);
