import React from 'react';
import 'react-dom';
import { translate } from 'react-i18next';
import Helmet from 'react-helmet';

// TODO: Title should auto concat
const Schedule = ({ t }) => (
  <div id="coming-soon">
    <Helmet title={`${t('nav.schedule')} | ${t('site_name')}`} />
    Coming Soon...
  </div>
);

Schedule.propTypes = {
  t: React.PropTypes.func.isRequired,
};

export default translate()(Schedule);
