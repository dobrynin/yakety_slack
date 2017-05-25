import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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

const demoButton = (login, history) => (
  <button className='login-button' onClick={() => login('demo1','password').then(() => history.push('/channels/'))}>
    <a>Demo 1</a>
  </button>
);

const sessionLinks = (formType, login, history) => (
  <nav className="login-signup">
    { demoButton(login, history) }
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

const Greeting = ({ currentUser, logout, formType, login, history }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks(formType, login, history)
);

export default withRouter(Greeting);
