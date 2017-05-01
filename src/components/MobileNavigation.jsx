import React from 'react';
import 'react-dom';
import { translate } from 'react-i18next';
import NavigationLanguageSwitcher from './NavigationLanguageSwitcher';
import NavigationItem from './NavigationItem';

const Navigation = ({ t }) => (
  <div id="navPanel">
    <nav>
      <ul>
        <NavigationItem exact to="/">{t('nav.home')}</NavigationItem>
        <NavigationItem to="/schedule">{t('nav.schedule')}</NavigationItem>
        <NavigationItem disabled to="/speakers">{t('nav.speakers')}</NavigationItem>
        <NavigationItem to="/partners">{t('nav.partners')}</NavigationItem>
        <NavigationItem disabled to="/register">{t('nav.register')}</NavigationItem>
        <NavigationLanguageSwitcher />
      </ul>
    </nav>
  </div>
);

Navigation.propTypes = {
  t: React.PropTypes.func.isRequired,
};

export default translate()(Navigation);
