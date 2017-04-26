import React from 'react';
import 'react-dom';
import { translate } from 'react-i18next';
import Helmet from 'react-helmet';

import Container from '../containers/HomeContainer';
import { requestSponsors, requestSponsorLevels } from '../actions/sponsors';

import Partner from './home/Partner';
import Article from './home/Article';

class Home extends React.Component {
  componentWillMount() {
    this.props.dispatch(requestSponsors());
    this.props.dispatch(requestSponsorLevels());
  }

  render() {
    return (
      <div>
        <Helmet title={this.props.t('site_name')} />
        <Article {...this.props} />
        <Partner {...this.props} />
      </div>
    );
  }
}

Home.propTypes = {
  t: React.PropTypes.func.isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

export default translate()(Container(Home));
