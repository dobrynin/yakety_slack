import React from 'react';
import { Link } from 'react-router-dom';
import SplashPageFooterColumn from './splash_page_footer_column';
const SplashPageFooter = () => (
  <div className='splash-page-footer'>
    <SplashPageFooterColumn title='Using Yak' color="#555269"
      links={['Product',
        'Enterprise',
        'Pricing',
        'Support',
        'Yak Guides',
        'App Directory',
        'API']} />
      <SplashPageFooterColumn title='Yak ♥' color="#86656F"
      links={['Jobs',
              'Customers',
              'Developers',
              'Events',
              'Blog',
              'Podcast',
              'Yak Shop']} />
      <SplashPageFooterColumn title='Legal' color="#758765"
      links={['Privacy',
              'Security',
              'Terms of Service',
              'Policies']} />
      <SplashPageFooterColumn title='Handy Links' color="#978F71"
      links={['Download desktop app',
              'Download mobile app',
              'Yak at work',
              'Status']} />
  </div>
);

export default SplashPageFooter;
