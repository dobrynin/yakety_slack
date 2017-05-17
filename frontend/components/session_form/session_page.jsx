import React from 'react';
import SessionFormContainer from './session_form_container';
import SplashPageFooter from '../splash_page/splash_page_footer/splash_page_footer';
import BottomLinks from '../splash_page/splash_page_footer/bottom_links';
import SplashPageHeader from '../splash_page/splash_page_header';
const LoginPage = ({ location }) => (
  <div className="login-page">
    <section className='session-page-header'>
      <SplashPageHeader />
    </section>
    <section className="session-page-content">
      <SessionFormContainer location={ location }/>
    </section>
    <section className='splash-page-footer-wrapper'>
      <SplashPageFooter />
    </section>
    <section className="bottom-links-wrapper">
      <BottomLinks />
    </section>
  </div>
)

export default LoginPage;
