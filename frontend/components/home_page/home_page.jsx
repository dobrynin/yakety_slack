import React from 'react';
import NavBarContainer from './nav_bar_container';
import MessageIndexContainer from './message_index_container';
import { fetchChannels } from '../../actions/channel_actions';
import { ProtectedRoute } from '../../util/route_util';

const HomePage = () => (
  <div className='home-page'>
    <NavBarContainer />
    <ProtectedRoute path='/channels/:channelId' component={MessageIndexContainer}/>
  </div>
);

export default HomePage;
