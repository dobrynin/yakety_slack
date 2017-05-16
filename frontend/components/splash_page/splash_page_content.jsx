import React from 'react';
import { Link } from 'react-router-dom';

const SplashPageContent = () => (
  <div>
    <h1>
      Where work happens.
    </h1>
    <p>
      Whatever work means for you, Yak brings all the pieces and people
      you need together so you can actually get things done.
    </p>
    <Link to='/signup'>
      <button className='get-started-button'>Get Started</button>
    </Link>
  </div>
);

export default SplashPageContent;
