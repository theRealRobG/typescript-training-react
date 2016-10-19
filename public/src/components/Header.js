import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

function header() {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Vending Machine</IndexLink>
      {" | "}
      <Link to="/admin" activeClassName="active">Admin</Link>
    </nav>
  );
};

export default header;
