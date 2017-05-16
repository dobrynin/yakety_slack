import React from 'react';
import { Link } from 'react-router-dom';

const SplashPageFooterColumn = ({ title, links }) => (
  <div>
    <h1 className='footer-column-title'>{title}</h1>
    {links.map((link, idx) => <Link to='/' key={idx}>{link}</Link>)}
  </div>
);

export default SplashPageFooterColumn;
