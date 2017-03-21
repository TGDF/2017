import React from 'react';
import 'react-dom';
import { translate } from 'react-i18next';
import Helmet from 'react-helmet';

import Container from '../containers/HomeContainer';

const Home = ({ t }) => (
  <section>
    <Helmet title={t('site_name')} />
  </section>
);

Home.propTypes = {
  t: React.PropTypes.func.isRequired,
  // TODO: posts: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default translate()(Container(Home));
