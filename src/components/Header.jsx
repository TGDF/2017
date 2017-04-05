import React from 'react';
import 'react-dom';
import { translate } from 'react-i18next';
import { Route } from 'react-router-dom';

import Navigation from './Navigation';
import Banner from './Banner';
import Introduce from './Introduce';

const Header = () => (
  <div id="header-wrapper">
    <header id="header">
      <div id="logo" />
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
