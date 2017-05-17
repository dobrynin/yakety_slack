import { Link } from 'react-router-dom';
import React from 'react';

import { withRouter } from 'react-router-dom';
const Logo = () => (
  <Link to="/" className='logo'>
    <figure>
      <img src="http://res.cloudinary.com/dx1asdayi/image/upload/v1495054602/logo_rv0phd.png" alt="yak" />
    </figure>
  </Link>
);

export default Logo;
