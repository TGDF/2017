import React from 'react';
import 'react-dom';
import { translate } from 'react-i18next';
import { Route } from 'react-router-dom';

import Navigation from './Navigation';
import Banner from './Banner';
import Introduce from './Introduce';

import logo from './../assets/tgdf_logo_2017_web.jpg';

const Header = ({ t }) => (
  <div id="header-wrapper">
    <header id="header">
      <img src={logo} alt={"TGDF logo 2017"} />
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
