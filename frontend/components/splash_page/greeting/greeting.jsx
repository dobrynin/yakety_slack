import React from 'react';
import { Link } from 'react-router-dom';
const loginButton = (formType) => (
  formType === 'login' ? "" : (
    <button className='login-button'>
      <Link to="/login" className='session-button'>Login</Link>
    </button>
  )
);

const signUpButton = (formType) => (
  formType ==='signup' ? "" : (
    <button>
      <Link to="/signup" className='session-button'>Sign Up</Link>
    </button>
  )
);

const demoButton = (login) => (
  <button className='login-button' onClick={() => login('demo1','password')}>
    <a>Demo 1</a>
  </button>
);

const sessionLinks = (formType, login) => (
  <nav className="login-signup">
    { demoButton(login) }
    { signUpButton(formType) }
    { loginButton(formType) }
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <div>
    <h1 className="header-team-name">
    </h1>
    <button className='session-button' onClick={logout}>Log Out</button>
  </div>
);

const Greeting = ({ currentUser, logout, formType, login }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks(formType, login)
);

export default Greeting;
