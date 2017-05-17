import React from 'react';
import { Link } from 'react-router-dom';

const SplashPageFooterColumn = ({ title, links, color }) => (
  <div className='splash-page-footer-column' style={{color: color}}>
    <h1 className='footer-column-title'>{title}</h1>
    {links.map((link, idx) => <Link to='/' key={idx} className='footer-column-item'>{link}</Link>)}
  </div>
);

export default SplashPageFooterColumn;
