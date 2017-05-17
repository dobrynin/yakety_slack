import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SplashPageHeader from './splash_page_header';
import SplashPageContentContainer from './splash_page_content_container';
import SplashPageFooter from './splash_page_footer/splash_page_footer';
import BottomLinks from './splash_page_footer/bottom_links';

const SplashPage = () => (
  <div className="splash-page">
    <section className='hero-image'>
      <SplashPageHeader />
      <SplashPageContentContainer />
    </section>
    <section className='splash-page-footer-wrapper'>
      <SplashPageFooter />
    </section>
    <section className="bottom-links-wrapper">
      <BottomLinks />
    </section>
  </div>
);

export default SplashPage;
