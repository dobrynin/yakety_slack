import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SplashPageHeader from './splash_page_header';
import SplashPageContent from './splash_page_content';
import SplashPageFooter from './splash_page_footer/splash_page_footer';

const SplashPage = () => (
  <div>
    <SplashPageHeader />
    <SplashPageContent />
    <SplashPageFooter />
  </div>
);

export default SplashPage;
