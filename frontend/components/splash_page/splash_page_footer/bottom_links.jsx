import React from 'react';
import { Link } from 'react-router-dom';

const BottomLinks = () => (
  <div className='bottom-links'>
    <ul>
      <li>
        <a href='https://dobrynin.com' key={'contact-me'}>Contact me</a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/daviddobrynin/' key={'linkedin'}>
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a href='https://github.com/dobrynin' key={'github'}>
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
      </li>
    </ul>

  </div>
);

export default BottomLinks;
