import React from 'react';
import GreetingContainer from './splash_page/greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SplashPage from './splash_page/splash_page';

const App = () => (
  <div>
    <header>
      <SplashPage />
    </header>

    <AuthRoute path='/login' component={SessionFormContainer} />
    <AuthRoute path='/signup' component={SessionFormContainer} />
  </div>
);

export default App;
