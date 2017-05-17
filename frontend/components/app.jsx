import React from 'react';
import GreetingContainer from './splash_page/greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashPage from './splash_page/splash_page';
import SessionPage from './session_form/session_page';
import HomePage from './home_page/home_page';

const App = () => (
  <div>
    <AuthRoute path='/login' component={SessionPage} />
    <AuthRoute path='/signup' component={SessionPage} />
    <Route exact path='/' component={SplashPage} />
    <ProtectedRoute path='/messages' component={HomePage} />
  </div>
);

export default App;
