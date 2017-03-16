import React from 'react';
import 'react-dom';
import { Link } from 'react-router-dom';

const NavigationLink = ({ to, disabled, children }) => {
  if (disabled) {
    return <a className="nav-link disabled">{children}</a>;
  }
  return <Link className="nav-link" to={to}>{children}</Link>;
};

NavigationLink.defaultProps = {
  disabled: false,
};

NavigationLink.propTypes = {
  to: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
  disabled: React.PropTypes.bool,
};

export default NavigationLink;
