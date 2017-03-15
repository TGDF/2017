import React from 'react';
import 'react-dom';
import { translate } from 'react-i18next';

const Footer = ({ t }) => (
  <footer id="footer" className="bg-inverse">
    &copy; 2017 {t('site_name')} all rights reversed.
  </footer>
);

Footer.propTypes = {
  t: React.PropTypes.func.isRequired,
};

export default translate()(Footer);
