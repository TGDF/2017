import React from 'react';
import 'react-dom';
import { Route } from 'react-router-dom';

import NavigationLink from './NavigationLink';

const NavigationItem = ({ to, disabled, exact, children }) => (
  <Route
    exact={exact}
    path={to}
    children={({ match }) => ( // eslint-disable-line react/no-children-prop
      <li className={match ? 'nav-item active' : 'nav-item'}>
        <NavigationLink disabled={disabled} to={to}>{children}</NavigationLink>
      </li>
      )}
  />
);

NavigationItem.defaultProps = {
  exact: false,
  disabled: false,
};

NavigationItem.propTypes = {
  to: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
  exact: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
};

export default NavigationItem;
