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
        <Helmet>
          <title>{this.props.t('site_name')}</title>
          <meta property="og:url" content="https://2017.tgdf.tw/" />
          <meta property="og:title" content={this.props.t('site_name')} />
          <meta property="og:description" content={this.props.t('home.cfp.introduce')} />
          <meta property="og:image" content="https://2017.tgdf.tw/static/tgdf.png" />
        </Helmet>
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
