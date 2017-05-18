import React from 'react';
import ChannelIndex from './channel_index';

const NavBar = ({channels, fetchChannels}) => (
  <div className='home-page-nav-bar'>
    <ChannelIndex channels={channels} fetchChannels={fetchChannels}/>
  </div>
);

export default NavBar;
