import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <button>
      <Link to="/signup" className='sign-up-button'>Sign Up</Link>
    </button>
    <button className='login-button'>
      <Link to="/login" className='sign-up-button'>Login</Link>
    </button>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <div>
    <h1 className="header-team-name"></h1>
    <button className='header-button' onClick={logout}>Log Out</button>
  </div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
