import React from 'react';
import 'react-dom';
import { translate } from 'react-i18next';
import { Route } from 'react-router-dom';

import Navigation from './Navigation';
import Banner from './Banner';
import Introduce from './Introduce';

const Header = ({ t }) => (
  <div id="header-wrapper">
    <header id="header">
      <h1 className="logo">{t('site_name')}</h1>
      <Navigation />
      <Route exact path="/" component={Banner} />
      <Route exact path="/" component={Introduce} />
    </header>
  </div>
);

Header.propTypes = {
  t: React.PropTypes.func.isRequired,
};


export default translate()(Header);
