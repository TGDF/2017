import React from 'react';
import 'react-dom';
import { translate } from 'react-i18next';
import NavigationLanguageSwitcher from './NavigationLanguageSwitcher';
import NavigationItem from './NavigationItem';

const Navigation = ({ t }) => (
  <nav className="navbar fixed-top navbar-toggleable-md navbar-inverse bg-inverse bg-faded">
    <div className="container">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <span className="navbar-brand">TGDF</span>
      <div className="collapse navbar-collapse" id="navigation">
        <ul className="navbar-nav mr-auto">
          <NavigationItem exact to="/">{t('nav.home')}</NavigationItem>
          <NavigationItem disabled to="/schedule">{t('nav.schedule')}</NavigationItem>
          <NavigationItem disabled to="/speakers">{t('nav.speakers')}</NavigationItem>
          <NavigationItem disabled to="/partners">{t('nav.partners')}</NavigationItem>
          <NavigationItem disabled to="/register">{t('nav.register')}</NavigationItem>
          <NavigationItem disabled to="/facebook">{t('nav.facebook')}</NavigationItem>
          <NavigationItem disabled to="/archive">{t('nav.archive')}</NavigationItem>
        </ul>
        <ul className="navbar-nav">
          <NavigationLanguageSwitcher />
        </ul>
      </div>
    </div>
  </nav>
);

Navigation.propTypes = {
  t: React.PropTypes.func.isRequired,
};

export default translate()(Navigation);
