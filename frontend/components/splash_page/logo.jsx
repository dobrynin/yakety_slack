import { Link } from 'react-router-dom';
import React from 'react';

import { withRouter } from 'react-router-dom';
const Logo = () => (
  <Link to="/" className='logo'>
    <figure>
      <img src="assets/logo.png" alt="yak" />
    </figure>
  </Link>
);

export default Logo;
