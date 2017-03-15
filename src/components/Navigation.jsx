import React from 'react';
import 'react-dom';
import {
  Route,
  Link,
} from 'react-router-dom';
import { translate } from 'react-i18next';
import NavigationLanguageSwitcher from './NavigationLanguageSwitcher';

const NavigationItem = ({ to, exact, children }) => (
  <Route
    exact={exact}
    path={to}
    children={({ match }) => ( // eslint-disable-line react/no-children-prop
      <li className={match ? 'nav-item active' : 'nav-item'}>
        <Link className="nav-link" to={to}>{children}</Link>
      </li>
      )}
  />
);

NavigationItem.defaultProps = {
  exact: false,
};

NavigationItem.propTypes = {
  to: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
  exact: React.PropTypes.bool,
};

const Navigation = ({ t }) => (
  <nav className="navbar fixed-top navbar-toggleable-md navbar-inverse bg-inverse bg-faded">
    <div className="container">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <Link className="navbar-brand" to="/">{t('site_name')}</Link>
      <div className="collapse navbar-collapse" id="navigation">
        <ul className="navbar-nav">
          <NavigationItem exact to="/">Home</NavigationItem>
          <NavigationItem to="/schedule">Schedule</NavigationItem>
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
