import React from 'react';
import { Link } from 'react-router-dom';

const loginButton = (formType) => (
  formType === 'login' ? "" : (
    <button className='login-button'>
      <Link to="/login" className='sign-up-button'>Login</Link>
    </button>
  )
);

const signUpButton = (formType) => (
  formType ==='signup' ? "" : (
    <button>
      <Link to="/signup" className='sign-up-button'>Sign Up</Link>
    </button>
  )
);

const sessionLinks = (formType) => (
  <nav className="login-signup">
    { signUpButton(formType) }
    { loginButton(formType) }
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <div>
    <h1 className="header-team-name"></h1>
    <button className='header-button' onClick={logout}>Log Out</button>
  </div>
);

const Greeting = ({ currentUser, logout, formType }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks(formType)
);

export default Greeting;
