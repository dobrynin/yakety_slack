import React from 'react';
import GreetingContainer from './splash_page/greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashPage from './splash_page/splash_page';
import SessionPage from './session_form/session_page';
import HomePageContainer from './home_page/home_page_container';

const App = () => (
  <div>
    <AuthRoute path='/login' component={SessionPage} />
    <AuthRoute path='/signup' component={SessionPage} />
    <Route exact path='/' component={SplashPage} />
    <ProtectedRoute path='/channels' component={HomePageContainer} />
  </div>
);

export default App;
