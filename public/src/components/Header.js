import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Vending Machine</IndexLink>
      {" | "}
      <Link to="/config" activeClassName="active">Config</Link>
    </nav>
  );
};

export default Header;
