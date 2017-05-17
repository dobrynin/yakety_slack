import { Link } from 'react-router-dom';
import React from 'react';

import { withRouter } from 'react-router-dom';
const Logo = () => (
  <Link to="/" className='logo'>
    <figure>
      <img src="https://cloudinary.com/console/media_library#/dialog/image/upload/logo_rv0phd" alt="yak" />
    </figure>
  </Link>
);

export default Logo;
