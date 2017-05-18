import React from 'react';
import ChannelIndex from './channel_index';
import NavBarHeader from './nav_bar_header';

const NavBar = ({channels, fetchChannels, currentUser}) => (
  <div className='home-page-nav-bar'>
    <NavBarHeader username={currentUser.username}/>
    <ChannelIndex channels={channels} fetchChannels={fetchChannels}/>
  </div>
);

export default NavBar;
