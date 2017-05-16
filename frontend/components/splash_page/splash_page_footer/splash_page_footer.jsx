import React from 'react';
import { Link } from 'react-router-dom';
import SplashPageFooterColumn from './splash_page_footer_column';
const SplashPageFooter = () => (
  <div>
    <SplashPageFooterColumn title='Using Yak'
      links={['Product',
        'Enterprise',
        'Pricing',
        'Support',
        'Yak Guides',
        'App Directory',
        'API']} />
    <SplashPageFooterColumn title='Yak ♥'
      links={['Jobs',
              'Customers',
              'Developers',
              'Events',
              'Blog',
              'Podcast',
              'Yak Shop']} />
    <SplashPageFooterColumn title='Legal'
      links={['Privacy',
              'Security',
              'Terms of Service',
              'Policies']} />
    <SplashPageFooterColumn title='Handy Links'
      links={['Download desktop app',
              'Download mobile app',
              'Yak at work',
              'Status']} />
  </div>
);

export default SplashPageFooter;
