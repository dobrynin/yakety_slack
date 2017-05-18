import React from 'react';
import NavBarContainer from './nav_bar_container';
import MessageIndexContainer from './message_index_container';
import { fetchChannels } from '../../actions/channel_actions';

const HomePage = () => (
  <div className='home-page'>
    <NavBarContainer />
    <MessageIndexContainer />
  </div>
);

export default HomePage;
